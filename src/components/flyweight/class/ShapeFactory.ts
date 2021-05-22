import Shape from "../interface/Shape";
import Circle from "./Circle";

export default class ShapeFactory {
    private constructor() { }
    static map: Map<string, Shape> = new Map<string, Shape>();
    static GetShape(color: string): Shape{
        if (this.map.has(color)) {
            return this.map.get(color)!;
        }
        else {
            let shape = new Circle(color);
            this.map.set(color, shape);
            return shape;
        }
    }
}