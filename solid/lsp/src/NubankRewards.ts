import IPaymentInstrument from './IPaymentInstrument';

export default class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log("[*] Validating your rewards score");
  }

  collectPayment(): void {
    console.log("[*] Payment made with rewards score");
  }
}
