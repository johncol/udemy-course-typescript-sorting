import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers: NumbersCollection = new NumbersCollection(6, 1, 0, -5, 55, 10);
numbers.print();
numbers.sort();
numbers.print();

const chars: CharactersCollection = new CharactersCollection('gjfngjkbkJBJbsdhjbiAS');
chars.print();
chars.sort();
chars.print();

const linkedList: LinkedList = new LinkedList(6, 1, 0, -5, 55, 10);
linkedList.print();
linkedList.sort();
linkedList.print();
