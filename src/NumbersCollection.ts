export class NumbersCollection {
  constructor(private numbers: number[]) {}

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
}
