import LeaveRequest from "../class/LeaveRequest";

export default abstract class Approver {
    protected nextApprover: Approver | undefined;
    protected name: string | undefined;
    constructor(name: string) {
        this.name = name;
    }
    public SetNextApprover(approver: Approver) {
        this.nextApprover = approver;
    }
    public abstract HandleRequest(leaveRequest: LeaveRequest): void;
}