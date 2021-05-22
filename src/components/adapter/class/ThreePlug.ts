import TwoPlug from "./TwoPlug";
import IThreePlug from "../interface/IThreePlug";

export default class ThreePlug extends TwoPlug implements IThreePlug {
    InsertThree() {
        this.AddEarth();
        super.InsertTwo();
    }
    private AddEarth(): void {
        console.log("加上地线");
    }
}