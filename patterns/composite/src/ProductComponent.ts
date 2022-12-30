export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}

  remove(product: ProductComponent): void {}
}
