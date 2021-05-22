import AbsCompute from "../../simplefactory/abstract/AbsCompute";
import { MetaClass } from "../decorator/DefineMetaInfo";

@MetaClass()
export default abstract class AbsComputeFactory {
    abstract CreateCompute(): AbsCompute;
}