import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'guiapp';

  Usuario: any;

  ngOnInit(): void {
    this.Usuario = JSON.parse(localStorage.getItem("usuario"));
    console.log(this.Usuario);
  }



}
