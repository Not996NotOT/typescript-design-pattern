import Item from "../interface/Item";
import Packing from "../interface/Packing";
import Cup from "../class/Cup";
export default abstract class Drink implements Item {
    abstract GetName(): string;
    public Packing(): Packing {
        return new Cup();
    }
    abstract GetPrice(): number;
}