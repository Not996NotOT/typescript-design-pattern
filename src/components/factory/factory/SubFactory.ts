import AbsComputeFactory from "../abstract/AbsComputeFactory";
import AbsCompute from "../abstract/AbsCompute";
import SubCompute from "../../simplefactory/class/SubCompute";

export default class SubFactory extends AbsComputeFactory {
    CreateCompute(): AbsCompute {
        return new SubCompute();
    }
}