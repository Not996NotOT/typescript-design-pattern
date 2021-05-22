import State from "./State";

export default interface IPlayer {
    name: string;
    click(): void;
    changeState(state: State): void;
}