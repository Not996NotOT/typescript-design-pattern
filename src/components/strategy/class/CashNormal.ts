import CashSuper from "../abstract/CashSuper";

export default class CashNormal implements CashSuper {
    public AcceptCash(money: number): number {
        return money;
    }

}