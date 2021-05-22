import React, { Component } from 'react'
import { Button } from 'antd'
import IPlayer from './interface/IPlayer'
import Player from './class/Player'
import AttackState from './class/AttackState'
import MoveState from './class/MoveState'
import TalkState from './class/TalkState'

interface Props {

}
interface State {

}


export default class Index extends Component<Props, State> {
    state = {}

    handlePlay = () => {
        let player:IPlayer = new Player("zhangxing");
        player.changeState(AttackState.instance);
        player.click();
        player.changeState(MoveState.instance);
        player.click();
        player.changeState(TalkState.instance);
        player.click();
    }
    render() {
        return (
            <div>
                <div>请按F12打开控制台查看效果</div>
                <Button onClick={this.handlePlay}>玩家开始</Button>
            </div>
        )
    }
}
