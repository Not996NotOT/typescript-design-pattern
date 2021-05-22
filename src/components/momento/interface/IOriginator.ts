import Role from "../model/Role";

export default interface IOriginator {
    SetMemento(memento: Role): void;
    CreateMemento(): Role;
}