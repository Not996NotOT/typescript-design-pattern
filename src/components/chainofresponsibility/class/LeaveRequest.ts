export default class LeaveRequest {
    private name: string;
    private day: number;
    private reason: string;
    constructor(name: string, day: number, reason: string) {
        this.name = name;
        this.day = day;
        this.reason = reason;
    }
    get Name() {
        return this.name;
    }
    get Day() {
        return this.day;
    }
    get Reason() {
        return this.reason;
    }
}