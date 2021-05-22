import Packing from "./Packing";

export default interface Item {
    GetName(): string;
    Packing(): Packing;
    GetPrice(): number;
}