import Shape from "../interface/Shape";

export default class Circle implements Shape {
    private x: number | undefined;
    private y: number | undefined;
    private color: string;
    private radius: number | undefined;
    constructor(color: string) {
        this.color = color;
    }
    SetX(x: number) {
        this.x = x;
    }
    SetY(y: number) {
        this.y = y;
    }
    SetRadius(radius: number) {
        this.radius = radius;
    }
    Draw(): void {
        console.log(`draw ${this.color} circle, x:${this.x} y:${this.y} radius:${this.radius}`)
    }
}