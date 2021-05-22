import { List } from 'linqts';
import Component from "../abstract/Component";

export default class Composite extends Component {
    list: List<Component> = new List<Component>();
    public Add(component: Component): void {
        this.list.Add(component);
    }
    public Remove(component: Component): void {
        this.list.Remove(component);
    }
    public Display(depth: number): void {
        let str = "";
        for (let i = 0; i <= depth; i++) {
            str += "-"
        }
        console.log(str + this.name);
        this.list.ToArray().map(item => {
            item.Display(depth + 2);
        })
    }
}