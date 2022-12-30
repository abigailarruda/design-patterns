import { IteratorInterface } from './IteratorInterface';
import { DataStructure } from './DataStructure';

export class DefaultIterator implements IteratorInterface<string> {
  private index = 0;

  constructor(private readonly dataStructure: DataStructure) {}

  reset(): void {
    this.index = 0;
  }

  next(): IteratorResult<string> {
    const returnValue = this.makeValue(this.dataStructure.items[this.index]);

    returnValue.done = this.index >= this.dataStructure.size();

    this.index++;

    return returnValue;
  }

  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }
}
