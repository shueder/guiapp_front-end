import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Usuario} from '../interfaces/Usuario';
import {LoginService} from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:indent
	constructor(private loginService: LoginService,private _router: Router) { }

	user:Usuario = {
    email: "",
    password: ''
  }

	ngOnInit() {}

	logiar() {
    this.loginService.postLogin(this.user).subscribe((data: any) => {
      if(data.error){
        alert(data.message);
      }else{
        localStorage.setItem("usuario",JSON.stringify(data.content[0].user));
        localStorage.setItem("menu",JSON.stringify(data.content[0].menu));
        localStorage.setItem("submenu",JSON.stringify(data.content[0].submenu))
        this._router.navigate(['menu']);
      }
    }, error => {
      if (error.status == '401') {

      } else {

      }
    });
  }

}
