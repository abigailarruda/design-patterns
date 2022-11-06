export interface HamburgerBuilder {
  addRegularBun: () => void;
  addBeefPatty: () => void;
  addKetchup: () => void;
  addPickleSlices: () => void;
  addOnions: () => void;
  addMustard: () => void;
  reset: () => void;
}
