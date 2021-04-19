/* eslint-disable prefer-const */
import {log, BigInt, BigDecimal, Address} from '@graphprotocol/graph-ts'
import {Pair, Token} from '../../types/dodoex/schema'
import {
    ZERO_BD,
    ONE_BD,
    convertTokenToDecimal,
} from './helpers'

import {
    STABLE_COIN_PAIR_ONE,
    STABLE_ONE_ADDRESS,
    STABLE_TWO_ADDRESS,
    BASE_COIN,
    WRAPPED_BASE_COIN,
    BASE_COIN_PAIR,
    TYPE_CLASSICAL_POOL,
    TYPE_DPP_POOL,
    TYPE_DVM_POOL,
} from "../constant"

let VALID_PRICING_TVL = BigDecimal.fromString("500");//500 usd

const STANDARD_TOKEN: string[] = [
    STABLE_ONE_ADDRESS,
    STABLE_TWO_ADDRESS,
    BASE_COIN,
    WRAPPED_BASE_COIN
];

function priceCore(time: BigInt): void {
    let stableOnePair = Pair.load(STABLE_COIN_PAIR_ONE);
    let baseCurrencyPair = Pair.load(BASE_COIN_PAIR);
    let wrappedBaseCoin = Token.load(WRAPPED_BASE_COIN);

    let stableCoinOne = Token.load(STABLE_ONE_ADDRESS);
    let stableCoinTwo = Token.load(STABLE_TWO_ADDRESS);

    let baseCoin = Token.load(BASE_COIN);

    if (stableOnePair != null && stableOnePair.baseReserve.plus(stableOnePair.quoteReserve).gt(ZERO_BD)) {

        let lastTradePrice = stableOnePair.lastTradePrice;
        let baseWeight = stableOnePair.baseReserve.div(stableOnePair.baseReserve.plus(stableOnePair.quoteReserve));
        let quoteWeight = stableOnePair.quoteReserve.div(stableOnePair.baseReserve.plus(stableOnePair.quoteReserve));
        let baseUsdPrice = lastTradePrice.minus(ONE_BD).times(ONE_BD.minus(baseWeight)).plus(ONE_BD);
        let quoteUsdPrice = lastTradePrice.minus(ONE_BD).times(ONE_BD.minus(quoteWeight)).plus(ONE_BD);

        let baseToken = Token.load(stableOnePair.baseToken);
        let quoteToken = Token.load(stableOnePair.quoteToken);
        baseToken.usdPrice = baseUsdPrice;
        quoteToken.usdPrice = quoteUsdPrice;
        baseToken.priceUpdateTimestamp = time;
        quoteToken.priceUpdateTimestamp = time;

        if (baseCurrencyPair != null) {
            if (stableOnePair.baseToken == baseCurrencyPair.quoteToken && baseToken.usdPrice != null) {
                wrappedBaseCoin.usdPrice = baseCurrencyPair.lastTradePrice.times(baseToken.usdPrice as BigDecimal);
                wrappedBaseCoin.priceUpdateTimestamp = time;
            }
            if (stableOnePair.quoteToken == baseCurrencyPair.quoteToken && quoteToken.usdPrice != null) {
                wrappedBaseCoin.usdPrice = baseCurrencyPair.lastTradePrice.times(quoteToken.usdPrice as BigDecimal);
                wrappedBaseCoin.priceUpdateTimestamp = time;
            }
            wrappedBaseCoin.save();
        }

        baseToken.save();
        quoteToken.save();
    } else {
        if (baseCurrencyPair != null) {
            wrappedBaseCoin.usdPrice = baseCurrencyPair.lastTradePrice;
            wrappedBaseCoin.priceUpdateTimestamp = time;
            wrappedBaseCoin.save();
        }
        if (stableCoinOne != null) {
            stableCoinOne.usdPrice = ONE_BD;
            stableCoinOne.priceUpdateTimestamp = time;
            stableCoinOne.save();
        }
        if (stableCoinTwo != null) {
            stableCoinTwo.usdPrice = ONE_BD;
            stableCoinTwo.priceUpdateTimestamp = time;
            stableCoinTwo.save();
        }
    }
    if (baseCoin != null) {
        baseCoin.usdPrice = wrappedBaseCoin.usdPrice;
        baseCoin.priceUpdateTimestamp = time;
        baseCoin.save();
    }

}

function updatePoolTokenPrice(pair: Pair, time: BigInt): void {
    if (pair.type == TYPE_CLASSICAL_POOL || pair.type == TYPE_DPP_POOL || pair.type == TYPE_DVM_POOL) {

        let quoteToken = Token.load(pair.quoteToken);
        let baseToken = Token.load(pair.baseToken);

        if (quoteToken.usdPrice != null) {
            baseToken.usdPrice = pair.lastTradePrice.times(quoteToken.usdPrice as BigDecimal);
            baseToken.priceUpdateTimestamp = time;
            baseToken.save();
        }
    }

}

export function updatePrice(pair: Pair, time: BigInt): void {
    priceCore(time)
    updatePoolTokenPrice(pair, time)
}

export function calculateUsdVolume(token0: Token, token1: Token, amount0: BigDecimal, amount1: BigDecimal): BigDecimal {
    let volumeUSD = ZERO_BD;
    if (token0.usdPrice != null && token1.usdPrice == null) {
        volumeUSD = volumeUSD.plus(token0.usdPrice.times(amount0));
    } else if (token0.usdPrice == null && token1.usdPrice != null) {
        volumeUSD = volumeUSD.plus(token1.usdPrice.times(amount1));
    } else if (token0.usdPrice != null && token1.usdPrice != null) {
        volumeUSD = volumeUSD.plus(token0.usdPrice.times(amount0)).plus(token1.usdPrice.times(amount1)).div(BigDecimal.fromString("2"));
    }

    return volumeUSD;
}

