export class HamburgerWithoutOnionsAndPickles {
  ingredients: string[] = [];

  public showHamburger(): void {
    console.log(`[🍔] This hamburger contains: ${this.ingredients.join(', ')}`);
  }
}
