import React, { Component } from 'react'
import { Button } from "antd";
import Game from './class/Game';
import GameStore from './class/GameStore';

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}
    constructor(props: any) {
        super(props)

    }
    handleClick = () => {
        let game = new Game();
        let gameStore = new GameStore();
        game.Fight();
        game.Fight();
        console.log("现在血量" + game.role.life);
        //存档
        console.log("开始存档")
        gameStore.SetMemento("001", game.CreateMemento())
        console.log("存档成功")
        game.Fight();
        game.Fight();
        console.log("现在血量" + game.role.life);
        console.log("开始读档")
        game.SetMemento(game.gameStore.GetMemento("001"))
        console.log("读档成功")
        console.log("现在血量" + game.role.life);
        game.Fight();
        game.Fight();
    }
    render() {
        return (
            <div>
                <div>按F12查看效果</div>
                <Button onClick={this.handleClick}>开始战斗</Button>
            </div>
        )
    }
}
