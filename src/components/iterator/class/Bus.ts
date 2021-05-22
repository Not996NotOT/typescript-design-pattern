import Aggregation from '../interface/Aggregation'
import Iteratorable from '../interface/Iteratorable';
import Passenger from './Passenger';
import Conductor from './Conductor';
export default class Bus implements Aggregation {
    private passengerList: Passenger[] = [];
    GetOn(passenger: Passenger) {
        this.passengerList.push(passenger);
    }
    CreateIterator(): Iteratorable {
        return new Conductor(this);
    }
    get Count() {
        return this.passengerList.length;
    }

    GetItem(index: number) {
        return this.passengerList[index];
    }

}