import { Director } from '../../builder/src/Director';
import { HamburgerWithEverythingBuilder } from '../../builder/src/builders/HamburgerWithEverythingBuilder';
import { HamburgerWithoutOnionsAndPicklesBuilder } from '../../builder/src/builders/HamburgerWithoutOnionsAndPicklesBuilder';

// * This is the facade for the folder src/builder/index.ts

export class BuilderFacade {
  private director: Director;
  private hamburgerWithEverythingBuilder = new HamburgerWithEverythingBuilder();
  private hamburgerWithoutOnionsAndPicklesBuilder = new HamburgerWithoutOnionsAndPicklesBuilder();

  makeFirstHamburger(): void {
    this.director = new Director(this.hamburgerWithEverythingBuilder);

    console.log("[🍔] Building complete hamburger");

    this.director.buildCompleteHamburger();
    this.hamburgerWithEverythingBuilder.getHamburgerWithEverything().showHamburger();
  }

  makeSecondHamburger(): void {
    this.director = new Director(this.hamburgerWithoutOnionsAndPicklesBuilder);

    console.log("[🍔] Build hamburger without pickles and onions");

    this.director.buildHamburgerWithoutPicklesAndOnions();
    this.hamburgerWithoutOnionsAndPicklesBuilder.getHamburgerWithoutOnionsAndPickles().showHamburger();
  }
}
