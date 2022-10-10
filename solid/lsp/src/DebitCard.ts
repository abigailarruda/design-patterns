import NubankCard from './NubankCard';

export default class DebitCard extends NubankCard {
  validate(): void {
    console.log("[*] Validating the account balance");
  }

  collectPayment(): void {
    console.log("[*] Payment made");
  }
}
