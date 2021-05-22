import React, { Component } from 'react'
import { Button } from 'antd'
import ShapeFactory from './class/ShapeFactory';
import Circle from './class/Circle';

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}
    handleClick = () => {
        const drawColor = ["green", "green", "pink","pink","pink", "green", "black"];
        drawColor.map(color => {
            let circle = ShapeFactory.GetShape(color) as Circle;
            circle.SetX(Math.ceil(Math.random() * 10));
            circle.SetY(Math.ceil(Math.random() * 10));
            circle.SetRadius(Math.ceil(Math.random() * 50));
            circle.Draw();
        })
        console.log(`实际创建的对象:${ShapeFactory.map.size}个`)
    }
    render() {
        return (
            <div>
                <div>请按F12查看效果</div>
                <Button onClick={this.handleClick}>画图</Button>
            </div>
        )
    }
}
