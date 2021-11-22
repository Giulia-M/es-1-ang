import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenereComponent } from '../genere/genere.component';
import { ModificaProductComponent } from '../modifica-product/modifica-product.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';

@NgModule({
  declarations: [CatalogComponent, GenereComponent, ModificaProductComponent],
  imports: [CommonModule, CatalogRoutingModule],
  providers: [],
})
export class CatalogModule {}
