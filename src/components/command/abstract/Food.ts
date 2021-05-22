export default abstract class Food {
    name:string;
    number: number;
    constructor(name:string,number: number) {
        this.number = number;
        this.name = name;
    }
    abstract Barbecue(): void;
}