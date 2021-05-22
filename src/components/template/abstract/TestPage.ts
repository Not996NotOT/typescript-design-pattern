export default abstract class TestPage {
    private name: string;
    constructor(name: string) {
        this.name = name;
        console.log("学生姓名" + this.name);
    }
    protected abstract Answer1(): string;
    protected abstract Answer2(): string;
    protected abstract Answer3(): string;

    private Question1() {
        console.log("这是问题一，选A B C D")
        console.log("回答问题1：", this.Answer1())
    }
    private Question2() {
        console.log("这是问题二，选A B C D")
        console.log("回答问题2：", this.Answer2())
    }

    private Question3() {
        console.log("这是问题三，选A B C D")
        console.log("回答问题3：", this.Answer3())
    }

    public AnswerQuestion() {
        this.Question1();
        this.Question2();
        this.Question3();
    }

}