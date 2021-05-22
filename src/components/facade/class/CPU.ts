import IComputer from "../interface/IComputer";
export default class CPU implements IComputer{
    Open(): void {
        console.log("启动CPU")
    }    
    Close(): void {
        console.log("关闭CPU")
    }


}