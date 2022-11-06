import { HamburgerBuilder } from "./builders/HamburgerBuilder";

export class Director {
  private builder: HamburgerBuilder;
  
  constructor(builder: HamburgerBuilder) {
    this.builder = builder;
  }

  buildCompleteHamburger(): void {
    this.builder.addRegularBun();
    this.builder.addBeefPatty();
    this.builder.addKetchup();
    this.builder.addMustard();
    this.builder.addOnions();
    this.builder.addPickleSlices();
  }

  buildHamburgerWithoutPicklesAndOnions(): void {
    this.builder.addRegularBun();
    this.builder.addBeefPatty();
    this.builder.addKetchup();
    this.builder.addMustard();
  }
}
