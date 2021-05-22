export default class Person {
    Name: string;
    /**
     * 构造函数
     * @param name 姓名
     */
    constructor(name: string = "") {
        this.Name = name;
    }
    Show() {
        console.log(`装扮的${this.Name}`)
    }
}