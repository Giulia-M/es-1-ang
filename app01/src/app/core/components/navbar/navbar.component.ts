import { Component, OnDestroy, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Product } from 'src/app/models/product';
// import { AuthService } from '../../services/auth.service';
import { CarrelloService } from '../../services/carrello.service';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userName!: any;
  private userSub: Subscription | undefined;

  faStar = faStar;
  textToSearch: string = '';
  // products: Product[] = [];

  constructor(
    public cart: CarrelloService,
    // public auth: AuthService,
    private dataStorgeService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    //funzione di subscribe quando siamo connessi tramite login
    this.userSub = this.authService.user.subscribe((user) => {
      //se non esiste l'utente allora false
      // this.isAuthenticated = !user ? false : true;
      this.isAuthenticated = !!user;
      /*
      console.log('cosa succede a !user' + !user);-->'cosa succede a !user false'
      console.log('cosa succede a !!user' + !!user);--> 'cosa succede a !!user true'
      */
    });
    this.userName = localStorage.getItem('email');
    console.log(this.userName);
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }
  /*
  onSaveData() {
    this.dataStorgeService.storeProduct();
  }

  onFetchData() {
    //usare il servizio di archiviazione dei dati e chiamare recuperare i film
    this.dataStorgeService.fetchData();
  }
  */
  onLogout() {
    this.authService.logout();
  }
}
