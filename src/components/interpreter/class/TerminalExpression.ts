import Expression from '../interface/Expression'
export default class TerminalExpression implements Expression {
    private set: Set<string>;
    constructor(data: string) {
        this.set = new Set<string>();
        let splitString = data.split(" ")
        if (splitString.length > 0) {
            data.split(" ").map(item => {
                this.set.add(item);
            })
        }
        else {
            this.set.add(data);
        }
    }
    Interpret(info: string): boolean {
        return this.set.has(info);
    }
}