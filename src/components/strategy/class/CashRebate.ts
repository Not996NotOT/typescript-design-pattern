import CashSuper from "../abstract/CashSuper";

export default class CashRebate implements CashSuper {
    rebate: number = 1.0;
    constructor(rebate: number) {
        this.rebate = this.rebate * rebate
    }
    public AcceptCash(money: number): number {
        return money * this.rebate;
    }

}