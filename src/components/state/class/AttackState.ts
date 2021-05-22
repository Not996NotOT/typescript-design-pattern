import State from "../interface/State";
import IPlayer from '../interface/IPlayer';

export default class AttackState implements State{
    static readonly instance = new AttackState();
    handle(iplayer: IPlayer): void {
       console.log(`${iplayer.name} 正在与怪物战斗`);
    }
}