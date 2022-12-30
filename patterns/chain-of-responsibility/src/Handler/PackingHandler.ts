import { AbstractHandler } from './AbstractHandler';
import { RequestType } from './RequestType';

export class PackingHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === RequestType.PackTheProduct) {
      return `[*] ${RequestType.PackTheProduct}`;
    }

    return super.handle(request);
  }
}