import { User } from '../user/User';

export class MyDatabase {
  private static instance: MyDatabase | null = null;
  private users: User[] = [];

  private constructor() {}

  static getInstance(): MyDatabase {
    if (!MyDatabase.instance) {
      MyDatabase.instance = new MyDatabase();
    }

    return MyDatabase.instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    console.table(this.users);
  }
}
