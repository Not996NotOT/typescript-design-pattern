import State from "../interface/State";
import IPlayer from '../interface/IPlayer';

export default class MoveState implements State{
    static readonly instance = new MoveState();
    handle(iplayer: IPlayer): void {
       console.log(`${iplayer.name} 正在移动`);
    }
}