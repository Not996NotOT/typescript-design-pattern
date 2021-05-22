import Expression from '../interface/Expression'
export default class AndExpression implements Expression {
    expressionLeft: Expression;
    expressionRight: Expression;
    constructor(expressionLeft: Expression, expressionRight: Expression) {
        this.expressionLeft = expressionLeft;
        this.expressionRight = expressionRight;
    }
    Interpret(info: string): boolean {
        let isflag: boolean = false;
        let splitString = info.split("的");
        if (splitString.length > 0) {
            isflag = this.expressionLeft.Interpret(splitString[0]) && this.expressionRight.Interpret(splitString[1]);
        }
        return isflag;
    }
}