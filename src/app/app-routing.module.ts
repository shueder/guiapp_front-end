import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu/menu.component';
import {EventoComponent} from './menu/menu/evento/evento.component';
import {LugaresComponent} from './menu/menu/lugares/lugares.component';
import {ToursComponent} from './menu/menu/tours/tours.component';


const routes: Routes = [
  {path: 'menu', component: MenuComponent,children: [
      {path: 'evento',component: EventoComponent,pathMatch: 'full'},
      {path: 'lugares',component: LugaresComponent,pathMatch: 'full'},
      {path: 'tour',component: ToursComponent,pathMatch: 'full'},
    ]},
  {path: '',component: LoginComponent},
  {path: '**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
