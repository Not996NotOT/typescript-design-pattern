import Iteratorable from '../interface/Iteratorable';
export default interface Aggregation {
    CreateIterator():Iteratorable;
}