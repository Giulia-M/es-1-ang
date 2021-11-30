import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/core/services/carrello.service';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products: Product[];
  textToSearch: string = '';
  // products_f: Product[] = [];
  active!: Product;
  constructor(
    private productService: ProductService,
    private cart: CarrelloService
  ) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productService.getAllProducts$().subscribe(
      (elenco) => (this.products = elenco),
      (errore) => console.log('errore!' + errore),
      () => console.log('Dati dei post caricati con successo')
    );
  }

  // ngOnInit(): void {
  //   this.productService.getFilms().subscribe(
  //     (elenco) => (this.products = elenco),
  //     (errore) => console.log('errore!' + errore),
  //     () => console.log('Dati dei post caricati con successo')
  //   );
  // }

  addToCart(p: Product): void {
    // console.log(p);
    this.cart.addToCart({ idCarrello: Math.random() * 10, ...p });
  }
  setActive(product: Product) {
    // console.log(product);
    this.active = product;
  }

  //non funziona
  get products_filtered(): Product[] {
    if (!this.textToSearch) {
      return this.products;
    }
    let filterBy = this.textToSearch.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.title.toLocaleLowerCase().includes(filterBy)
    );
  }
}
