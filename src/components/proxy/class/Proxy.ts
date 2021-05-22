import GiveGift from "../interface/GiveGift";
import Pursuit from "./Pursuit";
import SchoolGirl from "./SchoolGirl";

export default class Proxy implements GiveGift {

    GG: Pursuit;
    constructor(mm: SchoolGirl) {
        this.GG = new Pursuit(mm);
    }

    GiveDolls(): void {
        this.GG.GiveDolls();
    }
    GiveFlowers(): void {
        this.GG.GiveFlowers();
    }
    GiveChocolate(): void {
        this.GG.GiveChocolate();
    }


}