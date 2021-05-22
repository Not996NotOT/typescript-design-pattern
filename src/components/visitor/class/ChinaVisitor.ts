import Visitor from "../abstract/Visitor";
import ChinaMeseum from "../class/ChinaMeseum";
import EnglandMeseum from "../class/EnglandMeseum";

export default class ChinaVisitor extends Visitor {
    VisitChinaMeseum(chinaMeseum: ChinaMeseum): void {
        chinaMeseum.Show();
        chinaMeseum.Dance();
        this.DropLitter();
    }
    VisitEnglandMeseum(englandMeseum: EnglandMeseum): void {
        englandMeseum.Show();
        englandMeseum.Play();
        this.DropLitter();
    }
    private DropLitter(): void {
        console.log("中国游客在乱扔垃圾");
    }
}