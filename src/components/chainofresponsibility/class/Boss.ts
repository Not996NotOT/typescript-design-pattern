import Approver from "../abstract/Approver";
import LeaveRequest from "./LeaveRequest";

export default class Boss extends Approver {
    constructor(name: string) {
        super(name);
    }
    public HandleRequest(leaveRequest: LeaveRequest): void {
        console.log(`公司总经理：${leaveRequest.Name},批准请求`)
    }
}