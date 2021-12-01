import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenereComponent } from '../genere/genere.component';
import { ModificaProductComponent } from '../modifica-product/modifica-product.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CardsComponent } from './cards/cards.component';
import { FormsModule } from '@angular/forms';
import { FilterByStatusPipe } from 'src/app/pipe/inputSearch.pipe';

@NgModule({
  declarations: [
    CatalogComponent,
    GenereComponent,
    ModificaProductComponent,
    CardsComponent,
    FilterByStatusPipe,
  ],
  imports: [CommonModule, CatalogRoutingModule, FormsModule],
  providers: [],
})
export class CatalogModule {}
