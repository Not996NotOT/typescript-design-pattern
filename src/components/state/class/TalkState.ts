import State from "../interface/State";
import IPlayer from '../interface/IPlayer';

export default class TalkState implements State {
    static readonly instance = new TalkState();
    handle(iplayer: IPlayer): void {
        console.log(`${iplayer.name} 正在与NPC对话`);
    }
}