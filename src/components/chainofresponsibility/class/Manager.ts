import Approver from "../abstract/Approver";
import LeaveRequest from "./LeaveRequest";

export default class Manager extends Approver {
    constructor(name: string) {
        super(name);
    }
    public HandleRequest(leaveRequest: LeaveRequest): void {
        if (leaveRequest.Day < 4) {
            console.log(`部门经理：${leaveRequest.Name},批准请求`)
        } else {
            this.nextApprover!.HandleRequest(leaveRequest);
        }
    }
}