import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  items: CartItem[] = [];

  addToCart(product: Product) {
    /*
    this.items.push({
      product: product,
      id: product.id,
      creationDate: Date.now(),
    });
    */
    this.items = [
      ...this.items,
      {
        product: product,
        id: product.id,
        creationDate: Date.now(),
      },
    ];
  }

  removeFromCart(cartItem: CartItem) {}
}
