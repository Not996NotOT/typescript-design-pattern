import IClone from "../interface/IClone";

export default class Resume implements IClone<Resume> {

    private name: string | undefined;
    public age: number | undefined;
    public sex: string | undefined;
    private timeArea: string | undefined;
    private company: string | undefined;

    constructor(name: string) {
        this.name = name;
    }

    public SetPersonalInfo(sex: string = "", age: number = 0) {
        this.sex = sex;
        this.age = age;
    }

    public SetWorkExperience(timeArea: string = "", company: string = "") {
        this.timeArea = timeArea;
        this.company = company;
    }
    public Display() {
        let displayInfo = "";
        displayInfo += (`${this.name} ${this.age} ${this.sex}`)
        displayInfo += (`工作经历：${this.timeArea} ${this.company}`)
        return displayInfo;
    }

    /**
     * 浅拷贝
     */
    Clone(): Resume {
        let resume = new Resume(this.name!);
        resume.age = this.age;
        resume.sex = this.sex;
        //resume.SetPersonalInfo(this.sex, this.age);
        resume.SetWorkExperience(this.timeArea, this.company);
        return resume;
    }
}