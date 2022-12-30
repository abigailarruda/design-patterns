import { ProductComponent } from './ProductComponent';
import ProductLeaf from './ProductLeaf';

export default class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }

  add(product: ProductComponent): void {
    this.children.push(product);
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);

    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getChildren() {
    for (let i = 0; i < this.children.length; i++) {
      if ('children' in this.children[i]) {
        (this.children[i] as ProductComposite).getChildren();
      } else {
        const { name, price } = this.children[i] as ProductLeaf;
        
        console.log(`[*] Product: ${name} | Price: R$ ${price.toFixed(2)}`);
      }
    }
  }
}