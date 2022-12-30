import { AbstractHandler } from './AbstractHandler';
import { RequestType } from './RequestType';

export class PickingHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === RequestType.PickProductInWarehouse) {
      return `[*] ${RequestType.PickProductInWarehouse}`;
    }

    return super.handle(request);
  }
}
