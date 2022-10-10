import NubankCard from './NubankCard';

export default class CreditCard extends NubankCard {
  validate(): void {
    console.log("[*] Validating the card limit");
  }
  
  collectPayment(): void {
    console.log("[*] Payment made");
  }
}
