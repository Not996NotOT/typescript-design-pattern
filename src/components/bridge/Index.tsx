import React, { Component } from 'react'
import { Button } from 'antd'
import IPhoneX from './class/IPhoneX'
import Phone from './abstract/Phone'
import Wangzherongyao from './class/Wangzherongyao'
import QQMusic from './class/QQMusic'

interface Props {
    
}
interface State {
    
}

export default class Index extends Component<Props, State> {
    state = {}

    handleClick =()=>{
        let phone:Phone = new IPhoneX();
        phone.InstallSoftware(new Wangzherongyao());
        phone.InstallSoftware(new QQMusic());
        console.log(`生产的手机型号是：${phone.Name}`)
        phone.softwareList.ToArray().map(software=>{
            console.log(`安装的软件有：${software.Name}`)
        })
    }
    render() {
        return (
            <div>
                <div>按F12查看效果</div>
                <Button onClick={this.handleClick}>手机装软件</Button>
            </div>
        )
    }
}
