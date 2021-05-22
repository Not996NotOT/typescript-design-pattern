import IOriginator from "../interface/IOriginator";
import Role from "../model/Role";
import GameStore from "./GameStore";
import random from "random";

export default class Game implements IOriginator {
    role: Role;
    gameStore: GameStore;
    constructor() {
        this.role = new Role(100, 100, 1000);
        this.gameStore = new GameStore();
    }
    SetMemento(memento: Role): void {
        this.role = memento;
    }
    CreateMemento(): Role {
        return new Role(this.role.atk, this.role.def, this.role.life);
    }
    Fight() {
        this.role.life = this.role.life - random.int(50, 100);
        if (this.role.life > 0) {
            console.log("战斗完毕，剩余血量" + this.role.life)
        }
        else {
            this.role.life = 0
            console.log("已经死亡")
        }
    }
}