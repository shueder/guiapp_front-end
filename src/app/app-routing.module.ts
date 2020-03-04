import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu/menu.component';
import {EventoComponent} from './menu/menu/evento/evento.component';


const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'menu/evento',component: EventoComponent,outlet: "submenu"},
  {path: '',component: LoginComponent},
  {path: '**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
