import Client from './Client';

// The class has as its only responsibility the
// action of notifying by e-mail.
export default class Notify {
  constructor(private client: Client) {
    console.table(client);
  }

  // Other types of notifications could be added and 
  // extracted to specific classes to maintain the principle.
  sendEmail(): boolean {
    console.log(`[*] Sending e-mail to ${this.client.email}`);

    return true;
  }
}
