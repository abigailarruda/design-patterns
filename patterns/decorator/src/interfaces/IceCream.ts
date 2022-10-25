export type IceCreamType = 'Gelato' | 'Sorbet' | 'Cone' | 'Soft Serve';

export interface IceCream {
  getFlavor: () => string;
  getType: () => IceCreamType;
}
