import IComputer from "../interface/IComputer";

export default class Memory implements IComputer {
    Open(): void {
        console.log("开启内存")
    }
    Close(): void {
        console.log("关闭内存")
    }
}