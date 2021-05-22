import React, { Component } from 'react'
import { Form } from 'antd'
import { Button } from 'antd/lib/radio'
import Proxy from './class/Proxy'
import SchoolGirl from './class/SchoolGirl'

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}
    handleClick = () => {
        let proxy: Proxy = new Proxy(new SchoolGirl("mm"));
        proxy.GiveChocolate();
        proxy.GiveDolls();
        proxy.GiveFlowers();
    }
    render() {
        return (
            <Form>
                <Form.Item>
                    请按F12控制台查看效果
                </Form.Item>
                <Form.Item>
                    <Button onClick={this.handleClick} >代理追女友</Button>
                </Form.Item>
            </Form>
        )
    }
}
