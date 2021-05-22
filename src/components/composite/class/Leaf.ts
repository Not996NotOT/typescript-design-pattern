import Component from "../abstract/Component";

export default class Leaf extends Component {
    public Add(component: Component): void {
        throw new Error("没有子节点无法增加");
    }
    public Remove(component: Component): void {
        throw new Error("没有子节点无法删除");
    }
    public Display(depth: number): void {
        let str = "";
        for (let i = 0; i <= depth; i++) {
            str += "-"
        }
        console.log(str + this.name);
    }
}