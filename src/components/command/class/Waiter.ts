import Food from "../abstract/Food";

export default class Waiter {
    name: string;
    foodList: Array<Food> = [];
    constructor(name: string) {
        this.name = name;
    }
    PlaceOrder(food: Food) {
        this.foodList.push(food);
        console.log(`服务员${this.name}帮忙下单${food.name},数量${food.number}`)
    }
    Notify() {
        this.foodList.map(item => {
            item.Barbecue();
        })
    }
}