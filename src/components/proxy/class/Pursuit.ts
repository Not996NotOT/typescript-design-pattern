import GiveGift from "../interface/GiveGift";
import SchoolGirl from "./SchoolGirl";

export default class Pursuit implements GiveGift {
    MM: SchoolGirl;
    constructor(mm: SchoolGirl) {
        this.MM = mm;
    }
    GiveDolls(): void {
        console.log(this.MM.Name + ",送洋娃娃给你")
    }
    GiveFlowers(): void {
        console.log(this.MM.Name + ",送花给你")
    }
    GiveChocolate(): void {
        console.log(this.MM.Name + ",送巧克力给你")
    }


}