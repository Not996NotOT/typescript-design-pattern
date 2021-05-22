import IPlayer from "../interface/IPlayer";
import State from '../interface/State';

export default class Player implements IPlayer {
    private state: State | undefined;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    click(): void {
        if (this.state) {
            this.state.handle(this);
        }
    }
    changeState(state: State): void {
        this.state = state;
        console.log(`change to ${this.state.constructor.name}`)
    }
}