import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/core/services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css'],
})
export class CarrelloComponent implements OnInit {
  // constructor(public cart: CarrelloService) {}

  ngOnInit(): void {}

  //------
  constructor(public cart: CarrelloService) {}

  items$ = this.cart.items$;

  addToCart(product) {
    this.cart.addToCart(product);
  }
}
