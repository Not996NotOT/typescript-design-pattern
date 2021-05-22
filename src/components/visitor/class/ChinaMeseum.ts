import Meseum from "../abstract/Meseum";
import Visitor from "../abstract/Visitor";

export default class ChinaMeseum extends Meseum {

    Show(): void {
        console.log("中国馆在展示一些中国的古董，文化");
    }
    Dance(): void {
        console.log("少数名族在跳舞")
    }
    Accept(vistor:Visitor):void{
        vistor.VisitChinaMeseum(this);
    }
}