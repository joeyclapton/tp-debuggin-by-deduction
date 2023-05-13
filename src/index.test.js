const { ProductManager } = require('./index');

describe('ProductManager', () => {
  let productManager;

  beforeEach(() => {
    productManager = new ProductManager();
  });

  test('should add a product', () => {
    productManager.addProduct('Product A', 10);

    expect(productManager.products.length).toBe(1);
    expect(productManager.products[0].name).toBe('Product A');
    expect(productManager.products[0].price).toBe(10);
  });

  test('should remove a product', () => {
    productManager.addProduct('Product A', 10);
    productManager.removeProduct('Product A');

    expect(productManager.products.length).toBe(0);
  });

  test('should edit a product', () => {
    productManager.addProduct('Product A', 10);
    productManager.editProduct('Product A', 'New Product A', 20);

    expect(productManager.products[0].name).toBe('New Product A');
    expect(productManager.products[0].price).toBe(20);
  });

  test('should apply discount to all products', () => {
    productManager.addProduct('Product A', 10);
    productManager.addProduct('Product B', 20);
    productManager.applyDiscountToAllProducts(10);

    expect(productManager.products[0].price).toBe(9);
    expect(productManager.products[0].discount).toBe(10);
    expect(productManager.products[1].price).toBe(18);
    expect(productManager.products[1].discount).toBe(10);
  });

  test('should get a product by name', () => {
    productManager.addProduct('Product A', 10);
    productManager.addProduct('Product B', 20);
  
    const productA = productManager.getProductByName('Product A');
    const productB = productManager.getProductByName('Product B');
    const productC = productManager.getProductByName('Product C');
  
    expect(productA).toBeDefined();
    expect(productA.name).toBe('Product A');
    expect(productA.price).toBe(10);
  
    expect(productB).toBeDefined();
    expect(productB.name).toBe('Product B');
    expect(productB.price).toBe(20);
  
    expect(productC).toBeUndefined();
  });

  test('should calculate the total price of all products', () => {
    productManager.addProduct('Product A', 10);
    productManager.addProduct('Product B', 20);
    productManager.addProduct('Product C', 30);
  
    const totalPrice = productManager.calculateTotalPrice();
  
    expect(totalPrice).toBe(60);
  });
});
