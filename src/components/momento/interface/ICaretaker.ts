import Role from "../model/Role";

export default interface ICaretaker {
    GetMemento(mementoIndex:string): Role | undefined;
    SetMemento(mementoIndex:string,memento: Role): void;
}