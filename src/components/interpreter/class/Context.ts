import Expression from '../interface/Expression';
import TerminalExpression from './TerminalExpression';
import AndExpression from './AndExpression';
export default class Context {
    citys: string = "北京 上海 广州";
    persons: string = "老人 小孩";
    expression: Expression;
    constructor() {
        let cityExpression = new TerminalExpression(this.citys);
        let personExpression = new TerminalExpression(this.persons);
        this.expression = new AndExpression(cityExpression, personExpression);
    }
    FreeRide(info: string) {
        if (this.expression.Interpret(info)) {
            console.log(`${info}乘车免费`)
        }
        else {
            console.log(`${info}需要支付两元车费`)
        }
    }
}