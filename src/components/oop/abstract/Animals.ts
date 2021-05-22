import IBreath from "../interface/IBreath";

export default abstract class Animals implements IBreath {
    abstract Breath(): void;
}