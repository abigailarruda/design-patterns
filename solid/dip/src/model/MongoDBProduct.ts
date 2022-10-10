import IDatabaseProduct from './IDatabaseProduct';

export default class MongoDBProduct implements IDatabaseProduct {
  getProductByID(productID: number): string {
    return `Displaying the data for product ${productID} with MongoDB`
  }
}
