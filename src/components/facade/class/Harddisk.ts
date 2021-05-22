import IComputer from "../interface/IComputer";

export default class Harddisk implements IComputer {
    Open(): void {
        console.log("启动硬盘")
    }
    Close(): void {
        console.log("关闭硬盘")
    }
}