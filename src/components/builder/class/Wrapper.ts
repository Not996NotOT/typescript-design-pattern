import Packing from "../interface/Packing";

export default class Wrapper implements Packing {
    GetPack(): string {
        return "纸盒"
    }
}