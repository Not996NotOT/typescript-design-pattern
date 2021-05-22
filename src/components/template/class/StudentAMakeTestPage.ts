import TestPage from "../abstract/TestPage";

export default class StudentAMakeTestPage extends TestPage {
    constructor(name:string){
        super(name);
    }
    Answer1(): string {
        return "C";
    }
    Answer2(): string {
        return "B";
    }
    Answer3(): string {
        return "A";
    }

}