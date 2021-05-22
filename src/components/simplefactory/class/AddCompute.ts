import AbsCompute from "../abstract/AbsCompute";

export default class AddCompute implements AbsCompute {
    Calc(number1: number, number2: number): number {
        return number1 + number2;
    }
}