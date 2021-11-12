import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  data: Auth;
  constructor(private http: HttpClient, private router: Router) {
    this.data = {
      name: '',
      token: '',
    };
  }

  /*login(username: any, password: any): void {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    this.http
      .get<Auth>(`http://localhost:3000/login`, { params })
      .subscribe((res) => {
        this.data = res;
        this.router.navigateByUrl('catalog');
      });
  }

  isLog() {
    const IsAuth = this.data && this.data.token ? true : false;
    return IsAuth;
  }*/
}
