import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  constructor() {
    let existingCartItems = JSON.parse(localStorage.getItem('products'));
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject = new BehaviorSubject<Product[]>([]);
  items$ = this.itemsSubject.asObservable();

  addToCart(product: Product) {
    this.items$
      .pipe(
        take(1),
        map((products) => {
          products.push(product);
          localStorage.setItem('products', JSON.stringify(products));
        })
      )
      .subscribe();
  }

  //------------------------//

  // items: CartItem[] = [];

  /*
  addToCart(product: Product) {
    /*
    this.items.push({
      product: product,
      id: product.id,
      creationDate: Date.now(),
    });

    this.items = [
      ...this.items,
      {
        product: product,
        id: product.id,
        creationDate: Date.now(),
      },
    ];
  }


  removeFromCart(cartItem: CartItem) {
    this.items = this.items.filter(
      (item) => item.creationDate !== cartItem.creationDate
    );
  }

  proceed() {
    window.alert(` Hai acquistato ${this.items.length} film`);
  }
  */
}
