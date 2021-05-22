import Client from "../interface/Client";
import Car from "../interface/Car"
import Mediator from "../interface/Mediator";

export default class User implements Client {
    car: Car | undefined;
    constructor(private mediator: Mediator) {
        this.mediator.RegisterClient(this);
    }
    Pay(): void {
        this.mediator.Pay(this.car!);
        console.log("付款");
    }
    GetTaxi(): void {
        this.car = this.mediator.GetCar();
        if (this.car) {
            console.log("车来了");
        } else {
            console.log("没有叫到车")
        }
    }
}