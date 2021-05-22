import Packing from "../interface/Packing";
import Wrapper from "../class/Wrapper";
import Item from "../interface/Item";

export default abstract class Burger implements Item {
    public Packing(): Packing {
        return new Wrapper();
    }
    public abstract GetName(): string;
    public abstract GetPrice(): number;
}