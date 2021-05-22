import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import Dress from './decorator/Dress';
import Finery from './decorator/Finery';
import TShirts from './decorator/TShirts';
import Person from './class/Person';

const { TextArea } = Input;

interface Props {

}
interface State {
    Content: string
}

export default class Index extends Component<Props, State> {
    state = {
        Content: "请 F12 打开控制台查看"
    }

    handleDecorate = () => {

        let person: Person = new Person("zhangxing");
        let finery1: Finery = new Dress();
        let finery2: Finery = new TShirts();
        finery1.Decorate(person);
        finery2.Decorate(finery1);
        finery2.Show();

    }

    render() {
        return (
            <Form>
                <Form.Item>
                    <TextArea rows={10} value={this.state.Content} />
                </Form.Item>
                <Form.Item>
                    <Button onClick={this.handleDecorate}>打扮自己</Button>
                </Form.Item>
            </Form>
        )
    }
}
