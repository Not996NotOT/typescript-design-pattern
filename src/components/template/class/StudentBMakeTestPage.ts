import TestPage from "../abstract/TestPage";

export default class StudentBMakeTestPage extends TestPage {
    constructor(name: string) {
        super(name);
    }
    Answer1(): string {
        return "A"
    }
    Answer2(): string {
        return "A"
    }
    Answer3(): string {
        return "B"
    }
}