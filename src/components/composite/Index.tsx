import React, { Component } from 'react'
import { Button } from 'antd'
import Composite from './class/Composite'

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}
    handleClick = () => {
        let composite = new Composite("根节点");
        let composite1 = new Composite("子节点1");
        let composite2 = new Composite("子节点2");
        let composite3 = new Composite("子节点3");
        let composite4 = new Composite("子节点4");
        composite1.Add(composite3);
        composite1.Add(composite4);
        composite.Add(composite1);
        composite.Add(composite2);
        composite.Display(1);
    }
    render() {
        return (
            <div>
                按F12查看效果
               <Button onClick={this.handleClick}>组合</Button>
            </div>
        )
    }
}
