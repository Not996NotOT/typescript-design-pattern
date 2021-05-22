import React, { Component } from 'react'
import { Button } from 'antd'
import ITwoPlug from './interface/ITwoPlug'
import TwoPlug from './class/TwoPlug'
import IThreePlug from './interface/IThreePlug'
import ThreePlug from './class/ThreePlug'
import BullTwoPlug from './class/BullTwoPlug'
import ThreePlugAdapter from './class/ThreePlugAdapter'

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}
    handleClick = () => {
        //类适配器
        let twoPlug: ITwoPlug = new TwoPlug();
        twoPlug.InsertTwo();
        let threePlug: IThreePlug = new ThreePlug();
        threePlug.InsertThree();
        //对象适配器
        let threePlugOther = new ThreePlugAdapter(new BullTwoPlug());
        threePlugOther.InsertThree();
    }
    render() {
        return (
            <div>
                <div>请按F12查看效果</div>
                <Button onClick={this.handleClick}>接入插座</Button>
            </div>
        )
    }
}
