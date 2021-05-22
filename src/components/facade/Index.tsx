import React, { Component } from 'react'
import { Button } from 'antd'
import Computer from './class/Computer'

interface Props {

}
interface State {

}


export default class Index extends Component<Props, State> {
    computer: Computer
    constructor(props: any) {
        super(props);
        this.computer = new Computer();
    }
    state = {}

    handleOpenComputer = () => {
        this.computer.Open();
    }
    handleCloseComputer = () => {
        this.computer.Close();
    }
    render() {
        return (
            <div>
                <div>请按F12打开控制台查看效果</div>
                <Button onClick={this.handleOpenComputer}>开启电脑</Button>
                <Button onClick={this.handleCloseComputer}>关闭电脑</Button>
            </div>
        )
    }
}
