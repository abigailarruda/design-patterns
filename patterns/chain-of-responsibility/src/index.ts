import { Handler } from './Handler/Handler';
import { PackingHandler } from './Handler/PackingHandler';
import { PickingHandler } from './Handler/PickingHandler';
import { RequestType } from './Handler/RequestType';
import { ShippingHandler } from './Handler/ShippingHandler';

function main(handler: Handler) {
  const steps = [RequestType.PickProductInWarehouse, RequestType.PackTheProduct, RequestType.ShipTheProduct];

  console.log(`[*] The product order has been received`);

  for (const step of steps) {
    const result = handler.handle(step);

    if (result) {
      console.log(result);
    } else {
      console.log(`[*] The step "${step.toLowerCase()}" has not been completed`);
    }
  }
}

const pick = new PickingHandler();
const pack = new PackingHandler();
const ship = new ShippingHandler();

pick.setNext(pack).setNext(ship);

console.log('[*] Chain: Pick > Pack > Ship');
main(pick);

console.log('[*] Subchain: Pack > Ship');
main(pack);