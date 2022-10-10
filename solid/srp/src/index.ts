import Client from './Client';
import Notify from './Notify';

const client = new Client("email@example.com");
const notification = new Notify(client);

notification.sendEmail();
