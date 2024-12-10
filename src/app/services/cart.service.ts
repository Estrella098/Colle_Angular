import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private produits = [
    { id: 1, name: 'IPHONE', price: 1999.99, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6341/6341346_sd.jpg'},
    { id: 2, name: 'IPHONE', price: 3999.99, image: 'https://th.bing.com/th/id/R.7237086715a8d2554cd3a42be0ffe898?rik=bGTTV6pSqYUXTw&pid=ImgRaw&r=0' },
    { id: 3, name: 'SAMSUNG', price: 2999.99, image: 'https://th.bing.com/th/id/R.5d8f4a6ea5b31fd27952e909e29fb594?rik=Hl0BPuKqY1XCUw&pid=ImgRaw&r=0' },
    { id: 1, name: 'IPHONE', price: 1999.99, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6341/6341346_sd.jpg'},
    { id: 2, name: 'IPHONE', price: 3999.99, image: 'https://th.bing.com/th/id/R.7237086715a8d2554cd3a42be0ffe898?rik=bGTTV6pSqYUXTw&pid=ImgRaw&r=0' },
    { id: 2, name: 'IPHONE', price: 3999.99, image: 'https://th.bing.com/th/id/R.7237086715a8d2554cd3a42be0ffe898?rik=bGTTV6pSqYUXTw&pid=ImgRaw&r=0' },
  ];

  constructor() { }
  private cartItems: any[] = [];
  getProducts() {
    return this.produits;
  }

  addToCart(product: any) {
    const existingProduct = this.cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}


