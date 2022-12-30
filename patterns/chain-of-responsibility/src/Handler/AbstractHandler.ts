import { Handler } from './Handler';

export abstract class AbstractHandler implements Handler {
  private next: Handler;

  public setNext(handler: Handler): Handler {
    this.next = handler;

    return handler;
  }

  public handle(request: string): string {
    if (this.next) return this.next.handle(request);

    return '';
  }
}
