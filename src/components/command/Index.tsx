import React, { Component } from 'react'
import { Button } from "antd";
import Waiter from "./class/Waiter"
import Chicken from "./class/Chicken"
import Pork from "./class/Pork"

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}
    handleClick = () => {
        let waiter = new Waiter("zhangxing");
        waiter.PlaceOrder(new Chicken(10));
        waiter.PlaceOrder(new Pork(20));
        waiter.Notify();
    }
    render() {
        return (
            <div>
                <div>按F12查看效果</div>
                <Button onClick={this.handleClick}>
                    下单测试
                </Button>
            </div>
        )
    }
}
