import Observer from "./Observer";

export default interface Subject{
    Attach(observer:Observer):void;
    Detach(observer:Observer):void;
    Notify():void;
}