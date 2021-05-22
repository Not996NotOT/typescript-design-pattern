import React, { Component } from 'react'
import { Button } from 'antd'
import WeChart from './class/WeChart'
import User from './class/User'

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}

    handleClick = () => {
        let weChart: WeChart = new WeChart();
        let xiaoming = new User("小明");
        let xiaohong = new User("小红");
        let xiaozhang = new User("小张");
        weChart.Attach(xiaoming);
        weChart.Attach(xiaohong);
        weChart.Attach(xiaozhang);
        weChart.SendMessage("微信给你们推送了一条测试消息哦");
    }
    render() {
        return (
            <div>
                <div>
                    请按 F12 查看效果
                </div>
                <Button onClick={this.handleClick}>
                    发送消息
                </Button>
            </div>
        )
    }
}
