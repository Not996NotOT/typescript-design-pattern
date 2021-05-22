import Packing from "../interface/Packing";

export default class Cup implements Packing {
    GetPack(): string {
        return "纸杯"
    }   
}