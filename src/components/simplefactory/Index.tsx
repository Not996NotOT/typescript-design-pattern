import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'antd'
import ComputeFactory from './factory/ComputeFactory';

const { Option } = Select;

interface Props {

}
interface State {
    Number1: string;
    Number2: string;
    Operator: string;
    Result: string;
}

export default class Index extends Component<Props, State> {
    state = {
        Number1: "",
        Number2: "",
        Operator: "+",
        Result: "",
    }
    selectChange = (value: string) => {
        this.setState({
            Operator: value
        })
    }
    calc = () => {
        let { Number1, Number2, Operator } = this.state;
        const Result = ComputeFactory.Create(Operator).Calc(Number.parseInt(Number1), Number.parseInt(Number2)).toString();
        this.setState({
            Result
        })
    }
    render() {
        return (
            <Form>
                <Form.Item label="数值一">
                    <Input onChange={(e) => {
                        this.setState({
                            Number1: e.target.value
                        })
                    }} />
                </Form.Item>
                <Form.Item label="运算符">
                    <Select defaultValue={this.state.Operator} onChange={this.selectChange}>
                        <Option value="+">+</Option>
                        <Option value="-">-</Option>
                        <Option value="*">*</Option>
                        <Option value="/">/</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="数值二">
                    <Input onChange={(e) => {
                        this.setState({
                            Number2: e.target.value
                        })
                    }} />
                </Form.Item>
                <Form.Item>
                    <Button onClick={this.calc}>计算</Button>
                </Form.Item>
                <Form.Item label="结果">
                    {this.state.Result}
                </Form.Item>
            </Form>
        )
    }
}
