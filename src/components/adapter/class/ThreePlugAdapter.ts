import TwoPlug from "./TwoPlug";
import IThreePlug from "../interface/IThreePlug";

export default class ThreePlugAdapter implements IThreePlug {
    twoPlug: TwoPlug;
    constructor(twoPlug: TwoPlug) {
        this.twoPlug = twoPlug;
    }
    InsertThree(): void {
        this.AddEarth();
        this.twoPlug.InsertTwo();
    }
    private AddEarth(): void {
        console.log("加上地线");
    }
}