export default class Moon {
    static moon: Moon | undefined;
    private constructor() { }
    static getInstance() {
        if (this.moon == undefined) {
            this.moon = new Moon();
        }
        return this.moon;
    }
}