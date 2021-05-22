import React, { Component } from 'react'
import { Button } from 'antd'
import Bus from './class/Bus';
import Passenger from './class/Passenger';
import Conductor from './class/Conductor';

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}

    handleClick = () => {
        let bus = new Bus();
        bus.GetOn(new Passenger("zhangxing"));
        bus.GetOn(new Passenger("xiaohong"));
        bus.GetOn(new Passenger("xiaoming"));
        let conductor = bus.CreateIterator() as Conductor;
        while (!conductor.IsDown()) {
            console.log(`${conductor.CurrentItem().name}买票`);
            conductor.Next();
        }
    }
    render() {
        return (
            <div>
                <div>
                    按F12 查看效果
                </div>
                <Button onClick={this.handleClick}>上车买票</Button>
            </div>
        )
    }
}
