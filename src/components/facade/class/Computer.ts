import IComputer from "../interface/IComputer";
import CPU from "./CPU";
import Harddisk from "./Harddisk";
import Memory from "./Memory";

export default class Computer implements IComputer {
    cpu: CPU
    harddisk: Harddisk
    memory: Memory
    constructor() {
        this.cpu = new CPU();
        this.harddisk = new Harddisk();
        this.memory = new Memory();
    }
    Open(): void {
        this.cpu.Open();
        this.harddisk.Open();
        this.memory.Open();
    }
    Close(): void {
        this.cpu.Close();
        this.harddisk.Close();
        this.memory.Close();
    }
}