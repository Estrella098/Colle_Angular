import { Component,OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit  {
  cartItems: any[] = [];  // Initialiser un tableau vide

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();  // Mettre à jour les éléments après suppression
    
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }
}