import CashSuper from "../abstract/CashSuper";
import CashNormal from "../class/CashNormal";
import CashRebate from "../class/CashRebate";
import CashReturn from "../class/CashReturn";

export default class CashContent {
    private cashSuper: CashSuper | undefined;
    /**
     * 策略类
     * @param cashSuperString 策略名称 
     */
    constructor(cashSuperString: string) {
        switch (cashSuperString) {
            case "正常":
                this.cashSuper = new CashNormal();
                break;
            case "满300返100":
                this.cashSuper = new CashReturn(300, 100)
                break;
            case "打8折":
                this.cashSuper = new CashRebate(0.8);
                break;
            default:
                this.cashSuper = new CashNormal();
                break;
        }
    }

    public GetResult(money: number): number {
        return this.cashSuper!.AcceptCash(money);
    }

}