import { IceCream, IceCreamType } from './interfaces/IceCream';

export class SimpleIceCream implements IceCream {
  private flavor: string = 'Vanilla';
  private type: IceCreamType = 'Cone';

  getFlavor(): string {
    return this.flavor;
  }

  getType(): IceCreamType {
    return this.type;
  }
}
