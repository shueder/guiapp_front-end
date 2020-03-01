import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu/menu.component';
import { SidebarComponent } from './menu/menu/sidebar/sidebar.component';
import { TopbarComponent } from './menu/menu/topbar/topbar.component';


/*
* Servicios
*/
import { LoginService } from './login/login.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      MenuComponent,
      SidebarComponent,
      TopbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'menu', component: MenuComponent}
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
