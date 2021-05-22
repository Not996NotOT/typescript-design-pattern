import Iteratorable from '../interface/Iteratorable';
export default abstract class Iterator implements Iteratorable {
    abstract First():any;
    abstract Next():any;
    abstract IsDown():any; 
    abstract CurrentItem():any;
}