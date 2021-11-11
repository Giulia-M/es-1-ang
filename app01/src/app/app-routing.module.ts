import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () =>
      import('./features/catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./features/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },
  {
    path: 'carrello',
    loadChildren: () =>
      import('./features/carrello/carrello.module').then(
        (m) => m.CarrelloModule
      ),
  },
  {
    path: '',
    redirectTo: '/catalog',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: '/catalog',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,

      scrollPositionRestoration: 'enabled',

      anchorScrolling: 'enabled',

      enableTracing: false,
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
