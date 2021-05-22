class Sun {
    static sun: Sun = new Sun();
    private constructor() { }
    static getInstance() {
        return this.sun;
    }
}
export default Sun;