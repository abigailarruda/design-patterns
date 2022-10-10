import IDatabaseProduct from '../model/IDatabaseProduct';
import Database from '../model/Database';
import MySQLProduct from '../model/MySQLProduct';
import MongoDBProduct from '../model/MongoDBProduct';

export default class DatabaseProductFactory {

  private static type: Database = Database.MONGODB;

  public static create(): IDatabaseProduct {
    if (DatabaseProductFactory.type === Database.MYSQL) {
      return new MySQLProduct();
    } else if (DatabaseProductFactory.type === Database.MONGODB) {
      return new MongoDBProduct();
    }

    return {} as IDatabaseProduct;
  }
}
