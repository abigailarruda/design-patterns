import { HamburgerWithoutOnionsAndPickles } from "../hamburgers/HamburgerWithoutOnionsAndPickles";
import { HamburgerBuilder } from "./HamburgerBuilder";

export class HamburgerWithoutOnionsAndPicklesBuilder implements HamburgerBuilder {
  private hamburger: HamburgerWithoutOnionsAndPickles;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.hamburger = new HamburgerWithoutOnionsAndPickles();
  }

  public getHamburgerWithoutOnionsAndPickles(): HamburgerWithoutOnionsAndPickles {
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
    console.log("[🥒] Didn't add pickle slices");
  }

  addOnions(): void {
    console.log("[🧅] Didn't add onions");
  }

  addMustard(): void {
    this.hamburger.ingredients.push("mustard");
    console.log("[🟡] Added mustard");
  }
}
