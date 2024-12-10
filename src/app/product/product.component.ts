import { Component, OnInit } from '@angular/core'; 
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',  
  styleUrls: ['./product.component.css']   
})
export class ProduitsComponent implements OnInit {
  products: any[] = [];  

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.products = this.cartService.getProducts();  
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
