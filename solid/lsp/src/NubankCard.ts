import IPaymentInstrument from './IPaymentInstrument';

export default abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log("[*] Validating the basic data");
  }
  
  collectPayment(): void {
    console.log("[*] Payment made");
  }
}
