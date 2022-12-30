import { IteratorInterface } from './IteratorInterface';
import { DefaultIterator } from './DefaultIterator';

export class DataStructure {
  private _items: string[] = [];
  private iterator: IteratorInterface<string> = new DefaultIterator(this);

  addItem(...items: string[]): void {
    items.forEach((item) => this.items.push(item));
  }

  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this.items.length;
  }

  changeIterator(iterator: IteratorInterface<string>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): IteratorInterface<string> {
    return this.iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }
}
