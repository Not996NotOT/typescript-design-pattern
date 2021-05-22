import Burger from "../abstract/Burger";

export default class BurgerB extends Burger {
    public GetName(): string {
        return "汉堡套餐B"
    }
    public GetPrice(): number {
        return 30;
    }
}