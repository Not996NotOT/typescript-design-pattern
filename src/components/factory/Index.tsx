import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'antd'
import { GetMetaClass } from "./decorator/DefineMetaInfo";
import AbsComputeFactory from './abstract/AbsComputeFactory';
import AddFactory from './factory/AddFactory';

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
        new AddFactory();
        console.log(GetMetaClass("AddFactory"));
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
