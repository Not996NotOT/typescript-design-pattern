export default class Role{
    atk: number;
    def: number;
    life: number;
    /**
     * 创建一个游戏角色
     * @param atk 攻击
     * @param def 防御
     * @param life 生命
     */
    constructor(atk: number, def: number, life: number) {
        this.atk = atk;
        this.def = def;
        this.life = life;
    }
}