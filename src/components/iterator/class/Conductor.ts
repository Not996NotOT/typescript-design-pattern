import Iterator from '../abstract/Iterator'
import Bus from './Bus';
export default class Conductor extends Iterator {
    bus: Bus;
    currentNumber: number;
    constructor(bus: Bus) {
        super();
        this.bus = bus;
        this.currentNumber = 0;
    }
    First() {
        this.currentNumber = 0;
        this.CurrentItem();
    }
    Next() {
        this.currentNumber++;
        this.CurrentItem();
    }
    IsDown() {
        return this.currentNumber == this.bus.Count;
    }
    CurrentItem() {
        return this.bus.GetItem(this.currentNumber);
    }
}