import React, { Component } from 'react'
import { Button } from 'antd'
import Context from './class/Context'

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}
    handleClick = () => {
        let bus = new Context();
        bus.FreeRide("南京的小孩");
        bus.FreeRide("北京的老人");
        bus.FreeRide("上海的成年人")
        bus.FreeRide("广州的老人")
    }
    render() {
        return (
            <div>
                <div>请按F12查看效果</div>
                <Button onClick={this.handleClick}>
                    乘客上车
                </Button>
            </div>
        )
    }
}
