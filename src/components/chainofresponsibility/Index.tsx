import React, { Component } from 'react'
import { Button } from 'antd'
import LeaveRequest from './class/LeaveRequest'
import Boss from './class/Boss'
import ViceBoss from './class/ViceBoss'
import Manager from './class/Manager'
import ViceManager from './class/ViceManager'

interface Props {

}
interface State {

}

export default class Index extends Component<Props, State> {
    state = {}
    handleClick = () => {

        let ding = new Boss("ding");
        let zhangxing = new ViceBoss("zhangxing");
        let personA = new Manager("personA");
        let personB = new ViceManager("personB");

        personB.SetNextApprover(personA);
        personA.SetNextApprover(zhangxing);
        zhangxing.SetNextApprover(ding);

        let leaveA = new LeaveRequest("zhangxing", 5, "生病");
        let leaveB = new LeaveRequest("xiaohong", 12, "结婚");
        personB.HandleRequest(leaveA);
        personB.HandleRequest(leaveB);
    }
    render() {
        return (
            <div>
                <div>请按F12查看效果</div>
                <Button onClick={this.handleClick}>请假</Button>
            </div>
        )
    }
}
