import { List } from 'linqts';
import Software from '../interface/Software';
export default abstract class Phone {
    softwareList: List<Software> = new List<Software>();
    Name: string;
    constructor(name: string) {
        this.Name = name;
    }
    InstallSoftware(software: Software) {
        this.softwareList.Add(software);
    }
    UnInstallSoftware(software: Software) {
        this.softwareList.Remove(software);
    }
}