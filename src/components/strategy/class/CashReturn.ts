import CashSuper from "../abstract/CashSuper";

export default class CashReturn implements CashSuper {
    moneyCondition: number;
    moneyReturn: number;
    /**
     * 消费满减
     * @param moneyCondition 满减条件，例如300元
     * @param moneyReturn 返利价格，例如满300减100元
     */
    constructor(moneyCondition: number, moneyReturn: number) {
        this.moneyCondition = moneyCondition;
        this.moneyReturn = moneyReturn;
    }
    public AcceptCash(money: number): number {
        if (money >= this.moneyCondition) {
            money = money - this.moneyReturn;
        }
        return money;
    }

}