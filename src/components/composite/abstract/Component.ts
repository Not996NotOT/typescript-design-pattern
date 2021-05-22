export default abstract class Component {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    public abstract Add(component: Component): void;
    public abstract Remove(component: Component): void;
    public abstract Display(depth: number): void;
}