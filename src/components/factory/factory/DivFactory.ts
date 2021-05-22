import AbsComputeFactory from "../abstract/AbsComputeFactory";
import AbsCompute from "../abstract/AbsCompute";
import DivCompute from "../class/DivCompute";

export default class DivFactory extends AbsComputeFactory {
    CreateCompute(): AbsCompute {
        return new DivCompute();
    }
}