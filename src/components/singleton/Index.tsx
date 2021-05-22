import React, { Component } from 'react'
import { Button } from 'antd'
import Sun from './class/Sun'
import Moon from './class/Moon'

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}
    handleClick = () => {
        let sun1 = Sun.getInstance();
        let sun2 = Sun.getInstance();
        if (sun1 === sun2) {
            console.log("太阳只有一个，是相同的");
        }
        let moon1 = Moon.getInstance();
        let moon2 = Moon.getInstance();
        if (moon1 == moon2) {
            console.log("月亮只有一个，是相同的");
        }
    }
    render() {
        return (
            <div>
                <div>按F12查看效果</div>
                <Button onClick={this.handleClick}>查看</Button>
            </div>
        )
    }
}
