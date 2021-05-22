import Meseum from "../abstract/Meseum";
import Visitor from "../abstract/Visitor";
export default class EnglandMeseum extends Meseum {
    Show(): void {
        console.log("英国正在进行展示英国皇室的风采")
    }
    Play(): void {
        console.log("英国在演奏风笛")
    }
    Accept(visitor: Visitor) {
        visitor.VisitEnglandMeseum(this);
    }
}