import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app01';
  //usere il servizio di autentitcazione
  constructor(private authService: AuthService) {}
  //all'avvio dell'app
  ngOnInit() {
    //chiamare servizio di accesso automatico
    this.authService.autologin();
  }
}
