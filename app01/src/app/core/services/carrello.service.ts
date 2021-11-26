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
    //per il refresh della pagina i prodotti rimangono nel carrello
    let existingCartItems = JSON.parse(localStorage.getItem('products'));
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject = new BehaviorSubject<Product[]>([]);
  items$ = this.itemsSubject.asObservable();

  addToCart(product: Product) {
    console.log(this.items$);
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
  /*
  remove(data: any) {
    const productArr: any[] = this.itemsSubject.getValue();
    productArr.forEach((item, index) => {
      if (item === data) {
        productArr.splice(index, 1);

        console.log(productArr);
      }
    });

    this.itemsSubject.next(productArr);

    //quando refresho la pagina, il carrello ha i prodotti rimasti
    localStorage.setItem('products', JSON.stringify(productArr));
  }
  */

  remove(data: any) {
    let productArr: any[] = this.itemsSubject.getValue();
    productArr = productArr.filter((item) => item.idCarrello !== data);

    this.itemsSubject.next(productArr);

    //quando refresho la pagina, il carrello ha i prodotti rimasti
    localStorage.setItem('products', JSON.stringify(productArr));
  }

  //------------------------//

  // items: CartItem[] = [];

  /*
  addToCart(product: Product) {
    /*metodo 1
    this.items.push({
      product: product,
      id: product.id,
      creationDate: Date.now(),
    });
    /* metodo 2
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

  //git checkout branch01
  //git commit -m "commit commenti"
  //git checkout main
  //git commit -m "commit main"
  //git merge branch01
}
