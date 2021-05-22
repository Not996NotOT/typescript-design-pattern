import Subject from "../interface/Subject";
import Observer from "../interface/Observer";
import { List } from 'linqts';

export default class WeChart implements Subject {
    observerList: List<Observer>;
    message: string;
    constructor() {
        this.observerList = new List<Observer>();
        this.message = "";
    }
    Attach(observer: Observer): void {
        this.observerList.Add(observer);
    }
    Detach(observer: Observer): void {
        this.observerList.Remove(observer);
    }
    Notify(): void {
        this.observerList.ForEach(item => {
            item!.Update(this.message);
        })
    }
    public SendMessage(message: string) {
        this.message = message;
        console.log(`服务端发送消息：${this.message}`)
        this.Notify();
    }
}