import Food from "../abstract/Food";
import Cook from "./Cook";

export default class Pork extends Food {
    cook: Cook = new Cook();
    constructor(number:number) {
        super("猪肉串", number);
    }
    Barbecue(): void {
        this.cook.BakePork(this);
    }
}