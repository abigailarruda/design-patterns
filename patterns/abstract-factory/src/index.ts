import { EnterpriseCreateVehicleCustomerFactory } from './factories/EnterpriseCreateVehicleCustomerFactory';
import { IndividualCreateVehicleCustomerFactory } from './factories/IndividualCreateVehicleCustomerFactory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const hrvTouring = enterpriseFactory.createVehicle('Honda HR-V Touring', 'John');
const wrangler = individualFactory.createVehicle('Jeep Wrangler', 'Mary');

hrvTouring.pickUp();
wrangler.pickUp();
