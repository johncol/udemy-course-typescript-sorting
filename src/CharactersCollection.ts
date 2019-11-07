import { Sortable } from './Sortable';
import { Sorter } from './Sorter';

export class CharactersCollection implements Sortable {
  private letters: string[];

  constructor(string: string) {
    this.letters = string.split('');
  }

  get length(): number {
    return this.letters.length;
  }

  firstIsGreaterThanSecond = (i: number, j: number): boolean => {
    return this.letters[i].toLowerCase() > this.letters[j].toLowerCase();
  };

  swap = (i: number, j: number): void => {
    const iValue: string = this.letters[i];
    this.letters[i] = this.letters[j];
    this.letters[j] = iValue;
  };

  print = (): void => {
    console.log(this.letters.join(''));
  };

  sort = (): void => {
    Sorter.sort(this);
  };
}
