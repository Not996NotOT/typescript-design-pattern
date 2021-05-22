import Animals from "../abstract/Animals";

export default class Cat extends Animals {
    Breath(): void {
        console.log("猫在空气中呼吸")
    }
    Color:string | undefined;
    Shout(): void {
        console.log("miao miao miao");
    }
}