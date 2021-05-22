import Visitor from "./Visitor";

export default abstract class Meseum {
     abstract Show(): void;
     abstract Accept(vistor:Visitor):void;
}