import Finery from "./Finery";

export default class TShirts extends Finery {
    constructor() {
        super();
    }
    Show() {
        this.WearTShirts();
        super.Show();
    }
    private WearTShirts() {
        console.log("穿T恤")
    }
}