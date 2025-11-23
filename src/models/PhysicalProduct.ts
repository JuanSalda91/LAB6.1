// ----- Physical Product Subclass ----- //

import { Product } from "./Product.ts";

export class PhysicalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    public weight: number
  ) {
    super(sku, name, price);
  }

  get formattedWeight(): string {
    return `${this.weight} kg`;
  }

  getPriceWithTax(): number {
    const taxRate = 0.10;
    return this.price + this.price * taxRate;
  }

  override displayDetails(): string {
    return `${super.displayDetails()}, Weight: ${this.formattedWeight}`;
  }
}