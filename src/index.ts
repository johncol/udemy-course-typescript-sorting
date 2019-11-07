import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers: NumbersCollection = new NumbersCollection([6, 1, 0, -5, 55, 10]);
numbers.print();
new Sorter(numbers).sort();
numbers.print();

const chars: CharactersCollection = new CharactersCollection('gjfngjkbkJBJbsdhjbiAS');
chars.print();
new Sorter(chars).sort();
chars.print();

const linkedList: LinkedList = new LinkedList(6, 1, 0, -5, 55, 10);
linkedList.print();
new Sorter(linkedList).sort();
linkedList.print();
