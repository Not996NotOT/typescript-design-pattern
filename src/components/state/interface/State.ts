import IPlayer from "./IPlayer";

export default interface State{
    handle(iplayer:IPlayer):void;
}