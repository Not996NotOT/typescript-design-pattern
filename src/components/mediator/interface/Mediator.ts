import Client from "./Client";
import Car from "./Car";

export default interface Mediator {
    RegisterClient(client: Client): void;
    RegisterCar(car: Car): void;
    GetCar(): Car;
    Pay(car: Car): void;
    UpdateCarStatus(car: Car): void;
}