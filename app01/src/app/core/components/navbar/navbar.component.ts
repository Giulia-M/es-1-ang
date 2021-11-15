import { Component, OnDestroy, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
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
  private userSub: Subscription | undefined;

  faStar = faStar;

  constructor(
    public cart: CarrelloService,
    // public auth: AuthService,
    private dataStorgeService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      // this.isAuthenticated = !user ? false : true;
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }
  onSaveData() {
    this.dataStorgeService.storeProduct();
  }
}
