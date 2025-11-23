import { PhysicalProduct } from "./models/PhysicalProduct.ts";
import { DigitalProduct } from "./models/DigitalProduct.ts";
import { calculateTax } from "./utils/taxCalculator.ts";
import { Product } from "./models/Product.ts";

const inventory: Product[] = [
  new PhysicalProduct("PHYS-001", "Laptop", 1200, 2.5),
  new PhysicalProduct("PHYS-002", "T‑Shirt", 25, 0.2),
  new DigitalProduct("DIG-001", "E‑Book: TypeScript Basics", 15, 5),
  new DigitalProduct("DIG-002", "Software License", 200, 0.1),
];

for (const item of inventory) {
  console.log("-----------");
  console.log(item.displayDetails());
  const finalPrice = calculateTax(item);
  console.log(`Final price with tax: $${finalPrice.toFixed(2)}`);
}
