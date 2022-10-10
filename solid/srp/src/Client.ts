export default class Client {

  email: string;

  constructor(email: string) {
    this.email = email;
  }

  create(): void {}

  read(): void {}

  update(): void {}

  delete(): void {}

  // According to SRP, this function must be extracted to 
  // another class in order to maintain single responsibility.
  // sendEmail(): boolean {
  //   return true;
  // }
}
