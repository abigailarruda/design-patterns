import { AbstractHandler } from './AbstractHandler';
import { RequestType } from './RequestType';

export class ShippingHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === RequestType.ShipTheProduct) {
      return `[*] ${RequestType.ShipTheProduct}`;
    }

    return super.handle(request);
  }
}