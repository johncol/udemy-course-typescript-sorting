import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const collection: NumbersCollection = new NumbersCollection([6, 1, 0, -5, 55, 10]);
const sorter: Sorter = new Sorter(collection);
collection.print();

sorter.sort();
collection.print();
