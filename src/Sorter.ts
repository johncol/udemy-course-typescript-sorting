export interface Collection {
  length: number;
  firstIsGreaterThanSecond(i: number, j: number): boolean;
  swap(i: number, j: number): void;
  print(): void;
}

export class Sorter {
  static sort(collection: Collection): void {
    const { length } = collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (collection.firstIsGreaterThanSecond(j, j + 1)) {
          collection.swap(j, j + 1);
        }
      }
    }
  }
}
