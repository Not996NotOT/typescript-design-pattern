import Animals from "../abstract/Animals";

export default class Dog extends Animals{
    Breath(): void {
        console.log("狗在空气中呼吸")
    }
    Shout(): void {
        console.log("wang wang wang");
    }
}