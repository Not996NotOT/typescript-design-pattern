import Food from "../abstract/Food";
import Cook from "./Cook";

export default class Chicken extends Food {
    cook = new Cook();
    constructor(number: number) {
        super("鸡肉串", number);
    }
    Barbecue() {
        this.cook.BakeChicken(this);
    }
}