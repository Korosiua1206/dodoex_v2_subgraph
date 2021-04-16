// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ChangePerReward extends ethereum.Event {
  get params(): ChangePerReward__Params {
    return new ChangePerReward__Params(this);
  }
}

export class ChangePerReward__Params {
  _event: ChangePerReward;

  constructor(event: ChangePerReward) {
    this._event = event;
  }

  get dodoPerBlock(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DonateDODO extends ethereum.Event {
  get params(): DonateDODO__Params {
    return new DonateDODO__Params(this);
  }
}

export class DonateDODO__Params {
  _event: DonateDODO;

  constructor(event: DonateDODO) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get donateDODO(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MintVDODO extends ethereum.Event {
  get params(): MintVDODO__Params {
    return new MintVDODO__Params(this);
  }
}

export class MintVDODO__Params {
  _event: MintVDODO;

  constructor(event: MintVDODO) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get superior(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get mintDODO(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferPrepared extends ethereum.Event {
  get params(): OwnershipTransferPrepared__Params {
    return new OwnershipTransferPrepared__Params(this);
  }
}

export class OwnershipTransferPrepared__Params {
  _event: OwnershipTransferPrepared;

  constructor(event: OwnershipTransferPrepared) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PreDeposit extends ethereum.Event {
  get params(): PreDeposit__Params {
    return new PreDeposit__Params(this);
  }
}

export class PreDeposit__Params {
  _event: PreDeposit;

  constructor(event: PreDeposit) {
    this._event = event;
  }

  get dodoAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class RedeemVDODO extends ethereum.Event {
  get params(): RedeemVDODO__Params {
    return new RedeemVDODO__Params(this);
  }
}

export class RedeemVDODO__Params {
  _event: RedeemVDODO;

  constructor(event: RedeemVDODO) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get receiveDODO(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get burnDODO(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get feeDODO(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class SetCantransfer extends ethereum.Event {
  get params(): SetCantransfer__Params {
    return new SetCantransfer__Params(this);
  }
}

export class SetCantransfer__Params {
  _event: SetCantransfer;

  constructor(event: SetCantransfer) {
    this._event = event;
  }

  get allowed(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UpdateDODOFeeBurnRatio extends ethereum.Event {
  get params(): UpdateDODOFeeBurnRatio__Params {
    return new UpdateDODOFeeBurnRatio__Params(this);
  }
}

export class UpdateDODOFeeBurnRatio__Params {
  _event: UpdateDODOFeeBurnRatio;

  constructor(event: UpdateDODOFeeBurnRatio) {
    this._event = event;
  }

  get dodoFeeBurnRatio(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class vDODOToken__userInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: Address;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: Address, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class vDODOToken__getLatestAlphaResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class vDODOToken__getWithdrawResultResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class vDODOToken extends ethereum.SmartContract {
  static bind(address: Address): vDODOToken {
    return new vDODOToken("vDODOToken", address);
  }

  _CAN_TRANSFER_(): boolean {
    let result = super.call("_CAN_TRANSFER_", "_CAN_TRANSFER_():(bool)", []);

    return result[0].toBoolean();
  }

  try__CAN_TRANSFER_(): ethereum.CallResult<boolean> {
    let result = super.tryCall("_CAN_TRANSFER_", "_CAN_TRANSFER_():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  _DODO_APPROVE_PROXY_(): Address {
    let result = super.call(
      "_DODO_APPROVE_PROXY_",
      "_DODO_APPROVE_PROXY_():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__DODO_APPROVE_PROXY_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_DODO_APPROVE_PROXY_",
      "_DODO_APPROVE_PROXY_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _DODO_CIRCULATION_HELPER_(): Address {
    let result = super.call(
      "_DODO_CIRCULATION_HELPER_",
      "_DODO_CIRCULATION_HELPER_():(address)",
      []
    );

    return result[0].toAddress();
  }

  try__DODO_CIRCULATION_HELPER_(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "_DODO_CIRCULATION_HELPER_",
      "_DODO_CIRCULATION_HELPER_():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _DODO_FEE_BURN_RATIO_(): BigInt {
    let result = super.call(
      "_DODO_FEE_BURN_RATIO_",
      "_DODO_FEE_BURN_RATIO_():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__DODO_FEE_BURN_RATIO_(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_DODO_FEE_BURN_RATIO_",
      "_DODO_FEE_BURN_RATIO_():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _DODO_PER_BLOCK_(): BigInt {
    let result = super.call(
      "_DODO_PER_BLOCK_",
      "_DODO_PER_BLOCK_():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__DODO_PER_BLOCK_(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_DODO_PER_BLOCK_",
      "_DODO_PER_BLOCK_():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _DODO_RATIO_(): BigInt {
    let result = super.call("_DODO_RATIO_", "_DODO_RATIO_():(uint256)", []);

    return result[0].toBigInt();
  }

  try__DODO_RATIO_(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_DODO_RATIO_", "_DODO_RATIO_():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _DODO_TEAM_(): Address {
    let result = super.call("_DODO_TEAM_", "_DODO_TEAM_():(address)", []);

    return result[0].toAddress();
  }

  try__DODO_TEAM_(): ethereum.CallResult<Address> {
    let result = super.tryCall("_DODO_TEAM_", "_DODO_TEAM_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _DODO_TOKEN_(): Address {
    let result = super.call("_DODO_TOKEN_", "_DODO_TOKEN_():(address)", []);

    return result[0].toAddress();
  }

  try__DODO_TOKEN_(): ethereum.CallResult<Address> {
    let result = super.tryCall("_DODO_TOKEN_", "_DODO_TOKEN_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _DOOD_GOV_(): Address {
    let result = super.call("_DOOD_GOV_", "_DOOD_GOV_():(address)", []);

    return result[0].toAddress();
  }

  try__DOOD_GOV_(): ethereum.CallResult<Address> {
    let result = super.tryCall("_DOOD_GOV_", "_DOOD_GOV_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _LAST_REWARD_BLOCK_(): BigInt {
    let result = super.call(
      "_LAST_REWARD_BLOCK_",
      "_LAST_REWARD_BLOCK_():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try__LAST_REWARD_BLOCK_(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_LAST_REWARD_BLOCK_",
      "_LAST_REWARD_BLOCK_():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _NEW_OWNER_(): Address {
    let result = super.call("_NEW_OWNER_", "_NEW_OWNER_():(address)", []);

    return result[0].toAddress();
  }

  try__NEW_OWNER_(): ethereum.CallResult<Address> {
    let result = super.tryCall("_NEW_OWNER_", "_NEW_OWNER_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _OWNER_(): Address {
    let result = super.call("_OWNER_", "_OWNER_():(address)", []);

    return result[0].toAddress();
  }

  try__OWNER_(): ethereum.CallResult<Address> {
    let result = super.tryCall("_OWNER_", "_OWNER_():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  _SUPERIOR_RATIO_(): BigInt {
    let result = super.call(
      "_SUPERIOR_RATIO_",
      "_SUPERIOR_RATIO_():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__SUPERIOR_RATIO_(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_SUPERIOR_RATIO_",
      "_SUPERIOR_RATIO_():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _TOTAL_BLOCK_DISTRIBUTION_(): BigInt {
    let result = super.call(
      "_TOTAL_BLOCK_DISTRIBUTION_",
      "_TOTAL_BLOCK_DISTRIBUTION_():(uint112)",
      []
    );

    return result[0].toBigInt();
  }

  try__TOTAL_BLOCK_DISTRIBUTION_(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_TOTAL_BLOCK_DISTRIBUTION_",
      "_TOTAL_BLOCK_DISTRIBUTION_():(uint112)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _TOTAL_BLOCK_REWARD_(): BigInt {
    let result = super.call(
      "_TOTAL_BLOCK_REWARD_",
      "_TOTAL_BLOCK_REWARD_():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__TOTAL_BLOCK_REWARD_(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_TOTAL_BLOCK_REWARD_",
      "_TOTAL_BLOCK_REWARD_():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _TOTAL_STAKING_POWER_(): BigInt {
    let result = super.call(
      "_TOTAL_STAKING_POWER_",
      "_TOTAL_STAKING_POWER_():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__TOTAL_STAKING_POWER_(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_TOTAL_STAKING_POWER_",
      "_TOTAL_STAKING_POWER_():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  alpha(): BigInt {
    let result = super.call("alpha", "alpha():(uint112)", []);

    return result[0].toBigInt();
  }

  try_alpha(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("alpha", "alpha():(uint112)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  userInfo(param0: Address): vDODOToken__userInfoResult {
    let result = super.call(
      "userInfo",
      "userInfo(address):(uint128,uint128,address,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new vDODOToken__userInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt()
    );
  }

  try_userInfo(
    param0: Address
  ): ethereum.CallResult<vDODOToken__userInfoResult> {
    let result = super.tryCall(
      "userInfo",
      "userInfo(address):(uint128,uint128,address,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new vDODOToken__userInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt()
      )
    );
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(to: Address, vDODOAmount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(vDODOAmount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(to: Address, vDODOAmount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(vDODOAmount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  approve(spender: Address, vDODOAmount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(vDODOAmount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(
    spender: Address,
    vDODOAmount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(vDODOAmount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(from: Address, to: Address, vDODOAmount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(vDODOAmount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    from: Address,
    to: Address,
    vDODOAmount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(vDODOAmount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLatestAlpha(): vDODOToken__getLatestAlphaResult {
    let result = super.call(
      "getLatestAlpha",
      "getLatestAlpha():(uint256,uint256)",
      []
    );

    return new vDODOToken__getLatestAlphaResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getLatestAlpha(): ethereum.CallResult<vDODOToken__getLatestAlphaResult> {
    let result = super.tryCall(
      "getLatestAlpha",
      "getLatestAlpha():(uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new vDODOToken__getLatestAlphaResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  availableBalanceOf(account: Address): BigInt {
    let result = super.call(
      "availableBalanceOf",
      "availableBalanceOf(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_availableBalanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "availableBalanceOf",
      "availableBalanceOf(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  dodoBalanceOf(account: Address): BigInt {
    let result = super.call(
      "dodoBalanceOf",
      "dodoBalanceOf(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_dodoBalanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "dodoBalanceOf",
      "dodoBalanceOf(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getWithdrawResult(dodoAmount: BigInt): vDODOToken__getWithdrawResultResult {
    let result = super.call(
      "getWithdrawResult",
      "getWithdrawResult(uint256):(uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(dodoAmount)]
    );

    return new vDODOToken__getWithdrawResultResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getWithdrawResult(
    dodoAmount: BigInt
  ): ethereum.CallResult<vDODOToken__getWithdrawResultResult> {
    let result = super.tryCall(
      "getWithdrawResult",
      "getWithdrawResult(uint256):(uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(dodoAmount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new vDODOToken__getWithdrawResultResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  getDODOWithdrawFeeRatio(): BigInt {
    let result = super.call(
      "getDODOWithdrawFeeRatio",
      "getDODOWithdrawFeeRatio():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getDODOWithdrawFeeRatio(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getDODOWithdrawFeeRatio",
      "getDODOWithdrawFeeRatio():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSuperior(account: Address): Address {
    let result = super.call("getSuperior", "getSuperior(address):(address)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toAddress();
  }

  try_getSuperior(account: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSuperior",
      "getSuperior(address):(address)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get dodoGov(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dodoToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get dodoApproveProxy(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get dodoTeam(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClaimOwnershipCall extends ethereum.Call {
  get inputs(): ClaimOwnershipCall__Inputs {
    return new ClaimOwnershipCall__Inputs(this);
  }

  get outputs(): ClaimOwnershipCall__Outputs {
    return new ClaimOwnershipCall__Outputs(this);
  }
}

export class ClaimOwnershipCall__Inputs {
  _call: ClaimOwnershipCall;

  constructor(call: ClaimOwnershipCall) {
    this._call = call;
  }
}

export class ClaimOwnershipCall__Outputs {
  _call: ClaimOwnershipCall;

  constructor(call: ClaimOwnershipCall) {
    this._call = call;
  }
}

export class InitOwnerCall extends ethereum.Call {
  get inputs(): InitOwnerCall__Inputs {
    return new InitOwnerCall__Inputs(this);
  }

  get outputs(): InitOwnerCall__Outputs {
    return new InitOwnerCall__Outputs(this);
  }
}

export class InitOwnerCall__Inputs {
  _call: InitOwnerCall;

  constructor(call: InitOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitOwnerCall__Outputs {
  _call: InitOwnerCall;

  constructor(call: InitOwnerCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class SetCantransferCall extends ethereum.Call {
  get inputs(): SetCantransferCall__Inputs {
    return new SetCantransferCall__Inputs(this);
  }

  get outputs(): SetCantransferCall__Outputs {
    return new SetCantransferCall__Outputs(this);
  }
}

export class SetCantransferCall__Inputs {
  _call: SetCantransferCall;

  constructor(call: SetCantransferCall) {
    this._call = call;
  }

  get allowed(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetCantransferCall__Outputs {
  _call: SetCantransferCall;

  constructor(call: SetCantransferCall) {
    this._call = call;
  }
}

export class ChangePerRewardCall extends ethereum.Call {
  get inputs(): ChangePerRewardCall__Inputs {
    return new ChangePerRewardCall__Inputs(this);
  }

  get outputs(): ChangePerRewardCall__Outputs {
    return new ChangePerRewardCall__Outputs(this);
  }
}

export class ChangePerRewardCall__Inputs {
  _call: ChangePerRewardCall;

  constructor(call: ChangePerRewardCall) {
    this._call = call;
  }

  get dodoPerBlock(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangePerRewardCall__Outputs {
  _call: ChangePerRewardCall;

  constructor(call: ChangePerRewardCall) {
    this._call = call;
  }
}

export class UpdateDODOFeeBurnRatioCall extends ethereum.Call {
  get inputs(): UpdateDODOFeeBurnRatioCall__Inputs {
    return new UpdateDODOFeeBurnRatioCall__Inputs(this);
  }

  get outputs(): UpdateDODOFeeBurnRatioCall__Outputs {
    return new UpdateDODOFeeBurnRatioCall__Outputs(this);
  }
}

export class UpdateDODOFeeBurnRatioCall__Inputs {
  _call: UpdateDODOFeeBurnRatioCall;

  constructor(call: UpdateDODOFeeBurnRatioCall) {
    this._call = call;
  }

  get dodoFeeBurnRatio(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateDODOFeeBurnRatioCall__Outputs {
  _call: UpdateDODOFeeBurnRatioCall;

  constructor(call: UpdateDODOFeeBurnRatioCall) {
    this._call = call;
  }
}

export class UpdateDODOCirculationHelperCall extends ethereum.Call {
  get inputs(): UpdateDODOCirculationHelperCall__Inputs {
    return new UpdateDODOCirculationHelperCall__Inputs(this);
  }

  get outputs(): UpdateDODOCirculationHelperCall__Outputs {
    return new UpdateDODOCirculationHelperCall__Outputs(this);
  }
}

export class UpdateDODOCirculationHelperCall__Inputs {
  _call: UpdateDODOCirculationHelperCall;

  constructor(call: UpdateDODOCirculationHelperCall) {
    this._call = call;
  }

  get helper(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateDODOCirculationHelperCall__Outputs {
  _call: UpdateDODOCirculationHelperCall;

  constructor(call: UpdateDODOCirculationHelperCall) {
    this._call = call;
  }
}

export class UpdateGovernanceCall extends ethereum.Call {
  get inputs(): UpdateGovernanceCall__Inputs {
    return new UpdateGovernanceCall__Inputs(this);
  }

  get outputs(): UpdateGovernanceCall__Outputs {
    return new UpdateGovernanceCall__Outputs(this);
  }
}

export class UpdateGovernanceCall__Inputs {
  _call: UpdateGovernanceCall;

  constructor(call: UpdateGovernanceCall) {
    this._call = call;
  }

  get governance(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateGovernanceCall__Outputs {
  _call: UpdateGovernanceCall;

  constructor(call: UpdateGovernanceCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyWithdrawCall__Inputs {
    return new EmergencyWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyWithdrawCall__Outputs {
    return new EmergencyWithdrawCall__Outputs(this);
  }
}

export class EmergencyWithdrawCall__Inputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall__Outputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get dodoAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get superiorAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get vdodoAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get all(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }
}

export class DonateCall extends ethereum.Call {
  get inputs(): DonateCall__Inputs {
    return new DonateCall__Inputs(this);
  }

  get outputs(): DonateCall__Outputs {
    return new DonateCall__Outputs(this);
  }
}

export class DonateCall__Inputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }

  get dodoAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DonateCall__Outputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }
}

export class PreDepositedBlockRewardCall extends ethereum.Call {
  get inputs(): PreDepositedBlockRewardCall__Inputs {
    return new PreDepositedBlockRewardCall__Inputs(this);
  }

  get outputs(): PreDepositedBlockRewardCall__Outputs {
    return new PreDepositedBlockRewardCall__Outputs(this);
  }
}

export class PreDepositedBlockRewardCall__Inputs {
  _call: PreDepositedBlockRewardCall;

  constructor(call: PreDepositedBlockRewardCall) {
    this._call = call;
  }

  get dodoAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PreDepositedBlockRewardCall__Outputs {
  _call: PreDepositedBlockRewardCall;

  constructor(call: PreDepositedBlockRewardCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get vDODOAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get vDODOAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get vDODOAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}