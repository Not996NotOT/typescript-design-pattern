import AbsComputeFactory from "../abstract/AbsComputeFactory";
import AbsCompute from "../abstract/AbsCompute";
import AddCompute from "../class/AddCompute";

export default class AddFactory extends AbsComputeFactory {
    CreateCompute(): AbsCompute {
        return new AddCompute();
    }
}