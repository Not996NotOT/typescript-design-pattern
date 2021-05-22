import AbsComputeFactory from "../abstract/AbsComputeFactory";
import AbsCompute from "../abstract/AbsCompute";
import MulCompute from "../class/MulCompute";

export default class MulFactory extends AbsComputeFactory {
    CreateCompute(): AbsCompute {
        return new MulCompute();
    }
}