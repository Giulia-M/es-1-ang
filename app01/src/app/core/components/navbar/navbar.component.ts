import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faStar = faStar;

  constructor(public cart: CarrelloService) {}

  ngOnInit(): void {}
}
