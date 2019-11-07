import { Sortable } from './Sortable';
import { Sorter } from './Sorter';

export class LinkedList implements Sortable {
  private head: Node | null = null;

  constructor(...values: number[]) {
    this.add(...values);
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let counter: number = 1;
    let pointer: Node | null = this.head;
    while (pointer.next) {
      pointer = pointer.next;
      counter++;
    }

    return counter;
  }

  firstIsGreaterThanSecond = (i: number, j: number): boolean => {
    return this.at(i).value > this.at(j).value;
  };

  swap = (i: number, j: number): void => {
    const iNode: Node = this.at(i);
    const jNode: Node = this.at(j);
    const iValue: number = iNode.value;
    iNode.value = jNode.value;
    jNode.value = iValue;
  };

  print = (): void => {
    if (!this.head) {
      console.log('null');
      return;
    }

    let pointer: Node = this.head;
    let output = `[${pointer.value}] -> `;
    while (pointer.next) {
      pointer = pointer.next;
      output += `[${pointer.value}] -> `;
    }
    output = output.substring(0, output.length - 4);

    console.log(output);
  };

  sort = (): void => {
    Sorter.sort(this);
  };

  at = (index: number): Node => {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let pointer: Node = this.head;
    let counter: number = 0;
    while (counter < index && pointer.next) {
      counter++;
      pointer = pointer.next;
    }

    if (counter === index) {
      return pointer;
    }

    throw new Error('Index out of bounds');
  };

  add = (...values: number[]): void => {
    values.forEach(this.addOne);
  };

  private addOne = (value: number): void => {
    const node: Node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let pointer: Node | null = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = node;
  };
}

class Node {
  next: Node | null = null;

  constructor(public value: number) {}
}
