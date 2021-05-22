import Burger from "../abstract/Burger";

export default class BurgerA extends Burger {
    public GetName(): string {
        return "汉堡套餐A"
    }
    public GetPrice(): number {
        return 50;
    }
}