import ProductComposite from './ProductComposite';
import ProductLeaf from './ProductLeaf';

const iphone = new ProductLeaf("iPhone 14 Pro", 9499.0);
const airpods = new ProductLeaf("AirPods Pro", 2599.0);
const charger = new ProductLeaf("USB-C 20W Charger", 219.0);
const receipt = new ProductLeaf("Receipt", 0);
const clearCase = new ProductLeaf("Clear Case", 575.0);

const biggerBox = new ProductComposite();
const mediumBox = new ProductComposite();
const smallerBoxOne = new ProductComposite();
const smallerBoxTwo = new ProductComposite();
const smallerBoxThree = new ProductComposite();

smallerBoxOne.add(iphone);
smallerBoxTwo.add(airpods);
smallerBoxThree.add(charger);

mediumBox.add(smallerBoxOne);
mediumBox.add(smallerBoxTwo);

biggerBox.add(clearCase);
biggerBox.add(receipt);
biggerBox.add(mediumBox);
biggerBox.add(smallerBoxThree);

biggerBox.getChildren();
console.log(`[*] Total: R$ ${biggerBox.getPrice().toFixed(2)}`)