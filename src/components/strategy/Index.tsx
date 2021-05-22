import React, { Component } from 'react'
import { Form, Input, Select, Button } from 'antd'
import CashContent from './content/CashContent';
const { Option } = Select;
const { TextArea } = Input;

interface Props {

}
interface State {
    Price: string,
    Count: string,
    Method: string,
    Total: string,
    ShowFont: string
}

export default class Index extends Component<Props, State> {
    state = {
        Price: "",
        Count: "",
        Method: "正常",
        Total: "",
        ShowFont: ""
    }

    handleChange = (value: any) => {
        this.setState({
            Method: value
        })
    }

    handleShowFont = (price: string, count: string, method: string, totalPrice: number): void => {
        const Message = `单价:${price},数量:${count},扣费方式:${method},总价:${totalPrice}\n`
        this.setState((preState) => ({
            ShowFont: preState.ShowFont + Message
        }))
    }

    handleBuy = () => {
        const { Price, Count, Method } = this.state;
        const cashContent = new CashContent(Method);
        const totalPrice = cashContent.GetResult(Number.parseFloat(Price) * Number.parseInt(Count));
        console.log(totalPrice);
        this.handleShowFont(Price, Count, Method, totalPrice)
    }

    render() {
        return (
            <>
                <Form>
                    <Form.Item label="单价">
                        <Input onChange={(e) => {
                            this.setState({
                                Price: e.target.value
                            })
                        }} />
                    </Form.Item>
                    <Form.Item label="数量">
                        <Input onChange={(e) => {
                            this.setState({
                                Count: e.target.value
                            })
                        }} />
                    </Form.Item>
                    <Form.Item label="计费方式">
                        <Select defaultValue={this.state.Method} onChange={this.handleChange}>
                            <Option value="正常">正常</Option>
                            <Option value="满300返100">满300返100</Option>
                            <Option value="打8折">打8折</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={this.handleBuy}>付款</Button>
                    </Form.Item>
                    <Form.Item>
                        <TextArea value={this.state.ShowFont} rows={10} />
                    </Form.Item>
                </Form>
            </>

        )
    }
}
