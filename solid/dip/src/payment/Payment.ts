import DatabaseProductFactory from '../factory/DatabaseProductFactory';

export default class Payment {
  pay(productID: number): void {
    const dbProduct = DatabaseProductFactory.create();
    const product = dbProduct.getProductByID(productID);

    console.log(`[*] ${product}`);
  }
}
