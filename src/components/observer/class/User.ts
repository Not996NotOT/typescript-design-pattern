import Observer from "../interface/Observer";

export default class User implements Observer {
    private name: string;
    private message: string;
    constructor(name: string) {
        this.name = name;
        this.message = "";
    }
    Update(message: string): void {
        this.message = message;
        this.Read();
    }
    Read() {
        console.log(`${this.name}收到消息：${this.message}`);
    }
}