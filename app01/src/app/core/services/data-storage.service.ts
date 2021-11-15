import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}

  storeProduct() {
    const films = this.productService.getAllProducts$();
    this.http
      .put(
        'https://ecommerce-5bb3a-default-rtdb.firebaseio.com/films.json',
        films
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
