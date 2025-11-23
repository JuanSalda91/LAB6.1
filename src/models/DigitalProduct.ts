// ----- Digital Product Subclass ----- //

import { Product } from "./Product.ts";

export class DigitalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    public fileSize: number // in MB
  ) {
    super(sku, name, price);
  }

  get formattedFileSize(): string {
    return `${this.fileSize} MB`;
  }

  // No tax for digital products
  getPriceWithTax(): number {
    return this.price;
  }

  override displayDetails(): string {
    return `${super.displayDetails()}, File size: ${this.formattedFileSize}`;
  }
}
