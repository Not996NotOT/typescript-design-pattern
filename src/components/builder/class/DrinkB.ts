import Drink from "../abstract/Drink";

export default class DrinkB extends Drink {
    GetName(): string {
        return "饮料B"
    }
    GetPrice(): number {
        return 15;
    }
}