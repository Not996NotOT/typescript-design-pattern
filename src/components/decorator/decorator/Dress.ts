import Finery from "./Finery";

export default class Dress extends Finery {
    constructor() {
        super();
    }
    Show() {
        this.WearDress();
        super.Show();
    }
    private WearDress() {
        console.log("穿连衣裙")
    }
}