import Approver from "../abstract/Approver";
import LeaveRequest from './LeaveRequest';

export default class ViceManager extends Approver {

    constructor(name: string) {
        super(name);
    }
    public HandleRequest(leaveRequest: LeaveRequest): void {
        if (leaveRequest.Day < 2) {
            console.log(`部门副经理：${leaveRequest.Name},批准请求`)
        } else {
            this.nextApprover!.HandleRequest(leaveRequest);
        }
    }
}