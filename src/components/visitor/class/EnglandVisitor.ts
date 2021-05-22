import Visitor from '../abstract/Visitor'
import ChinaMeseum from "../class/ChinaMeseum";
import EnglandMeseum from "../class/EnglandMeseum";
export default class EnglandVisitor extends Visitor {
    VisitChinaMeseum(chinaMeseum: ChinaMeseum): void {
        chinaMeseum.Show();
        chinaMeseum.Dance();
        this.TakePicture();
    }
    VisitEnglandMeseum(englandMeseum: EnglandMeseum): void {
        englandMeseum.Show();
        englandMeseum.Play();
        this.TakePicture();
    }
    private TakePicture() {
        console.log("英国游客在不停的拍照")
    }
}