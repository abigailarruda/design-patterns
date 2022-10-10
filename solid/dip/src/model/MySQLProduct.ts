import IDatabaseProduct from './IDatabaseProduct';

export default class MySQLProduct implements IDatabaseProduct {
  getProductByID(productID: number): string {
    return `Displaying the data for product ${productID} with MySQL`  
  }
}
