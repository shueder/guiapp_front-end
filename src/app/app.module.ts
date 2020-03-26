import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu/menu.component';
import { SidebarComponent } from './menu/menu/sidebar/sidebar.component';
import { TopbarComponent } from './menu/menu/topbar/topbar.component';
import { EventoComponent } from './menu/menu/evento/evento.component';


/*
* Servicios
*/
import { LoginService } from './login/login.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LugaresComponent } from './menu/menu/lugares/lugares.component';
import { ToursComponent } from './menu/menu/tours/tours.component';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      MenuComponent,
      SidebarComponent,
      TopbarComponent,
      PageNotFoundComponent,
      EventoComponent,
      LugaresComponent,
      ToursComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'evento', component: EventoComponent}
    ]),
    FormsModule
  ],
   providers: [
      LoginService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
