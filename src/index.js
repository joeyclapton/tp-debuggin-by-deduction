class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.discount = 0;
  }

  applyDiscount(discountPercentage) {
    this.discount = discountPercentage;
    this.price = this.price - (this.price * (discountPercentage / 100));
  }
}

class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(name, price) {
    const product = new Product(name, price);
    this.products.push(product);
  }

  removeProduct(name) {
    this.products = this.products.filter(product => product.name !== name);
  }

  editProduct(name, newName, newPrice) {
    const product = this.products.find(product => product.name === name);
    if (product) {
      product.name = newName;
      product.price = newPrice;
    }
  }

  applyDiscountToAllProducts(discountPercentage) {
    this.products.forEach(product => product.applyDiscount(discountPercentage));
  }

  getProductByName(name) {
    return this.products.find(product => product.name === name);
  }

  calculateTotalPrice() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}

module.exports = { Product, ProductManager };
