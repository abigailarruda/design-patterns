import { HamburgerWithEverything } from "../hamburgers/HamburgerWithEverything";
import { HamburgerBuilder } from "./HamburgerBuilder";

export class HamburgerWithEverythingBuilder implements HamburgerBuilder {
  private hamburger: HamburgerWithEverything;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.hamburger = new HamburgerWithEverything();
  }

  public getHamburgerWithEverything(): HamburgerWithEverything {
    const result = this.hamburger;
    this.reset();
    return result;
  }
  
  addRegularBun(): void {
    this.hamburger.ingredients.push("regular bun");
    console.log("[🍞] Added regular bun");
  }

  addBeefPatty(): void {
    this.hamburger.ingredients.push("beef patty");
    console.log("[🥩] Added beef patty");
  }

  addKetchup(): void {
    this.hamburger.ingredients.push("ketchup");
    console.log("[🍅] Added ketchup");
  }

  addPickleSlices(): void {
    this.hamburger.ingredients.push("pickle slices");
    console.log("[🥒] Added pickle slices");
  }

  addOnions(): void {
    this.hamburger.ingredients.push("onions");
    console.log("[🧅] Added onions");
  }

  addMustard(): void {
    this.hamburger.ingredients.push("mustard");
    console.log("[🟡] Added mustard");
  }
}
