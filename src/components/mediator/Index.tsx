import React, { Component } from 'react'
import { Button } from 'antd'
import DiDi from './class/DiDi'
import Taxi from './class/Taxi'
import User from './class/User'

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}
    handleClick = () => {
        let mediator = new DiDi();
        let car = new Taxi(mediator);
        let client = new User(mediator);
        client.GetTaxi();
        client.Pay();
    }
    render() {
        return (
            <div>
                <div>请按F12查看效果</div>
                <Button onClick={this.handleClick}>滴滴打车</Button>
            </div>
        )
    }
}
