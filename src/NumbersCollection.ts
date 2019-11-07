import { Sortable } from './Sortable';
import { Sorter } from './Sorter';

export class NumbersCollection implements Sortable {
  private numbers: number[];

  constructor(...numbers: number[]) {
    this.numbers = numbers;
  }

  get length(): number {
    return this.numbers.length;
  }

  firstIsGreaterThanSecond = (i: number, j: number): boolean => {
    return this.numbers[i] > this.numbers[j];
  };

  swap = (i: number, j: number): void => {
    const iValue: number = this.numbers[i];
    this.numbers[i] = this.numbers[j];
    this.numbers[j] = iValue;
  };

  print = (): void => {
    console.log(this.numbers);
  };

  sort = (): void => {
    Sorter.sort(this);
  };
}
