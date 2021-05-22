import Animals from "../abstract/Animals";
export default class Fish extends Animals{
    Breath(): void {
       console.log("鱼在水中呼吸")
    }

}