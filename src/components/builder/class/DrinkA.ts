import Drink from "../abstract/Drink";

export default class DrinkA extends Drink {
    GetName(): string {
        return "饮料A"
    }
    GetPrice(): number {
        return 10;
    }
}