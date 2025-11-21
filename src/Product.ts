// class Product {
//     sku: string;
//     name: string;
//     price: number;

//     constructor(sku: string, name: string, price: number) {
//         this.sku = sku;
//         this.name = name;
//         this.price = price;
//     }

//     displayDetails(): string {
//         return `Product sku: ${this.sku}, Product name: ${this.name}, Product price before taxes: $${this.price}.`
//     }
// };

// const product1 = new Product("akjdnka646648", "myProduct", 650);
// console.log(product1.displayDetails())

// class Product {
//   public static taxRate = 0.05;
 
//   private sku: string;
//   public name: string;
//   protected _price: number;
 
//   constructor(sku: string, name: string, price: number) {
//     this.sku = sku;
//     this.name = name;
//     this._price = price;
//   }
 
//   get price(): number {
//     return this._price * (Product.taxRate + 1);
//   }
//   set price(newBasePrice: number) {
//     this._price = newBasePrice;
//   }
 
//   public displayDetails(): string {
//     return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
//   }
// }

// const product1 = new Product("dsfsd65", "myProduct", 500);
// console.log(product1.displayDetails());