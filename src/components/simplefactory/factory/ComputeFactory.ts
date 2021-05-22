import AbsCompute from "../abstract/AbsCompute";
import AddCompute from "../class/AddCompute";
import SubCompute from "../class/SubCompute";
import MulCompute from "../class/MulCompute";
import DivCompute from "../class/DivCompute";

export default class ComputeFactory {
    static Create(operator: String): AbsCompute {
        switch (operator) {
            case "+":
                return new AddCompute();
            case "-":
                return new SubCompute();
            case "*":
                return new MulCompute();
            case "/":
                return new DivCompute();
            default:
                return new AddCompute();
        }
    }
}