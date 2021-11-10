import { NgModule } from "@angular/core";
import { CatalogComponent } from "./catalog.component";
import { CatalogFormSearchComponent } from "./components/catalog-form-search/catalog-form-search.component";
import { CatalogListComponent } from "./components/catalog-list/catalog-list.component";

@NgModule ({
    declarations:[
        CatalogComponent,
        CatalogFormSearchComponent,
        CatalogListComponent
    ],
    imports:[],
    providers:[]
})
export class CatalogModule {

}