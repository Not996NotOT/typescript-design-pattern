import Car from "../interface/Car"
import Mediator from "../interface/Mediator";
export default class Taxi implements Car {
    isWorking: boolean  =  false;
    constructor(private mediator: Mediator) {
        mediator.RegisterCar(this);
    }
    StartWork(): void {
        console.log("有人叫车");
        this.isWorking = true;
        this.mediator.UpdateCarStatus(this);
    }
    FinishWork(): void {
        console.log("送完这趟了")
        this.isWorking = false;
        this.mediator.UpdateCarStatus(this);
    }
}