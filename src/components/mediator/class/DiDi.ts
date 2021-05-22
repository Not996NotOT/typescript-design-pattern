import Mediator from "../interface/Mediator";
import Client from "../interface/Client";
import Car from "../interface/Car"
export default class DiDi implements Mediator {
    carList: Array<Car> = [];
    clientList: Array<Client> = [];
    RegisterClient(client: Client): void {
        this.clientList.push(client);
    }
    RegisterCar(car: Car): void {
        this.carList.push(car);
    }
    GetCar(): Car {
        let car = this.carList.find(car => !car.isWorking);
        if (car) car.StartWork();
        return car!;
    }
    Pay(car: Car): void {
        car.FinishWork();
    }
    UpdateCarStatus(car: Car): void {
        console.log(`车子的状态：${car.isWorking ? "工作中" : "闲置"}`)
    }
}