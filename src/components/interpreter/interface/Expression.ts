export default interface Expression {
    Interpret(info: string): boolean;
}