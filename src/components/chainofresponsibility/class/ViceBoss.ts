import Approver from "../abstract/Approver";
import LeaveRequest from "./LeaveRequest";

export default class ViceBoss extends Approver {
    constructor(name: string) {
        super(name);
    }
    public HandleRequest(leaveRequest: LeaveRequest): void {
        if (leaveRequest.Day < 6) {
            console.log(`公司副经理：${leaveRequest.Name},批准请求`)
        } else {
            this.nextApprover!.HandleRequest(leaveRequest);
        }
    }
}