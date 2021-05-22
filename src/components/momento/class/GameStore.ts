import ICaretaker from "../interface/ICaretaker";
import Role from "../model/Role";

export default class GameStore implements ICaretaker {
    GetMemento(mementoIndex: string): Role {
        return JSON.parse(localStorage.getItem(mementoIndex)!) as unknown as Role;
    }

    SetMemento(mementoIndex: string, memento: Role): void {
        localStorage.setItem(mementoIndex,JSON.stringify(memento));
      
    }
}