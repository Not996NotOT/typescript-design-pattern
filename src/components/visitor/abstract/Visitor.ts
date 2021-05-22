import ChinaMeseum from "../class/ChinaMeseum";
import EnglandMeseum from "../class/EnglandMeseum";

export default abstract class Visitor {
    abstract VisitChinaMeseum(chinaMeseum: ChinaMeseum): void;
    abstract VisitEnglandMeseum(englandMeseum: EnglandMeseum): void;
}