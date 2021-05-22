import Item from "../interface/Item";

export default class Meal {
    items: Item[];
    constructor() {
        this.items = new Array<Item>();
    }

    public GetCost(): number {
        let cost: number = 0;
        this.items.map(item => {
            cost += item.GetPrice();
        })
        return cost;
    }

    public ShowItem() {
        this.items.map(item => {
            console.log(`餐品：${item.GetName()}`);
            console.log(`包装：${item.Packing().GetPack()}`)
            console.log(`价格：${item.GetPrice()}`)
        })
    }
}