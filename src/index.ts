import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbers: NumbersCollection = new NumbersCollection([6, 1, 0, -5, 55, 10]);
numbers.print();
new Sorter(numbers).sort();
numbers.print();

const chars: CharactersCollection = new CharactersCollection('gjfngjkbkJBJbsdhjbiAS');
chars.print();
new Sorter(chars).sort();
chars.print();
