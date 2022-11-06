import { Director } from "./Director";
import { HamburgerWithEverythingBuilder } from './builders/HamburgerWithEverythingBuilder';
import { HamburgerWithoutOnionsAndPicklesBuilder } from './builders/HamburgerWithoutOnionsAndPicklesBuilder';

let director: Director;
const hamburgerWithEverythingBuilder = new HamburgerWithEverythingBuilder();
const hamburgerWithoutOnionsAndPicklesBuilder = new HamburgerWithoutOnionsAndPicklesBuilder();

director = new Director(hamburgerWithEverythingBuilder);
console.log("[🍔] Building complete hamburger");
director.buildCompleteHamburger();
hamburgerWithEverythingBuilder.getHamburgerWithEverything().showHamburger();

console.log("\n");

director = new Director(hamburgerWithoutOnionsAndPicklesBuilder);
console.log("[🍔] Build hamburger without pickles and onions");
director.buildHamburgerWithoutPicklesAndOnions();
hamburgerWithoutOnionsAndPicklesBuilder.getHamburgerWithoutOnionsAndPickles().showHamburger();
