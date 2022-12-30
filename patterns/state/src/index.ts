import { Order } from './Order/Order';

const order = new Order();

order.approvePayment();
order.waitPayment();
order.shipOrder();
order.rejectPayment();
order.shipOrder();
order.rejectPayment();

