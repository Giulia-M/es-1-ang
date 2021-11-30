import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiURL = 'https://jsonplaceholder.typicode.com';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8',
    }),
  };

  // public apiKeyTmdb = 'd74e01c1c95f676efb7328c3ce5b6713';

  constructor(private http: HttpClient) {}

  // getFilms(): Observable<Product[]> {
  //   const options = {
  //     params: {
  //       api_key: this.apiKeyTmdb,
  //       language: 'it-IT',
  //     },
  //   };
  //   return this.http
  //     .get<Product[]>('https://api.themoviedb.org/3/movie/200', options)
  //     .pipe(tap((item) => console.log(JSON.stringify(item))));
  // }

  getAllProducts$(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL + '/photos');
  }
  getProductById$(id: number): Observable<Product> {
    return this.http
      .get<Product>(`${this.apiURL}/photos/${id}`)
      .pipe(tap((product) => console.log(product)));
  }

  addProduct$(product: Product): Observable<Product> {
    // invia un post da salvare
    return this.http.post<Product>(
      this.apiURL + '/photos',
      JSON.stringify(product),
      this.httpOptions
    );
  }

  private products: Product[] = [];
}
