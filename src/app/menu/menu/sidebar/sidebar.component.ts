import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  Menu: any;
  Submenu: any;

	onOpen(){
    var collapse = $("#collapseTwo");
    if(collapse.hasClass("show")){
      $("#collapseTwo").removeClass("show").addClass("none");
    }else {
      $("#collapseTwo").removeClass("none").addClass("show");
    }
	}

  ngOnInit(): void {
    this.Menu = JSON.parse(localStorage.getItem("menu"));
    this.Submenu = JSON.parse(localStorage.getItem("submenu"));
  }

}
