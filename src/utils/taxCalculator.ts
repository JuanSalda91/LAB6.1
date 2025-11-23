import { Product } from "../models/Product.ts";

export function calculateTax(product: Product): number {
  // ----- Uses polymorphism: calls the correct getPriceWithTax implementation ----- //
  return product.getPriceWithTax();
}
