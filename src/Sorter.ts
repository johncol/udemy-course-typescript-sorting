export interface Sortable {
  length: number;
  firstIsGreaterThanSecond(i: number, j: number): boolean;
  swap(i: number, j: number): void;
  print(): void;
}

export class Sorter {
  constructor(private collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.firstIsGreaterThanSecond(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
