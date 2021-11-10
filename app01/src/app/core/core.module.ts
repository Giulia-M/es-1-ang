import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginRoutingModule } from "../features/login/login-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";


@NgModule ({
    declarations:[
      NavbarComponent
    ],
    exports:[NavbarComponent],
    imports:[CommonModule, RouterModule],
    providers:[]
})
export class CoreModule {

}