import { Sorter } from './Sorter';

const sorter: Sorter = new Sorter([6, 1, 0, -5, 55, 10]);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
