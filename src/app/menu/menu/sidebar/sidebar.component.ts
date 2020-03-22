import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as $ from "jquery";
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  @ViewChild('appDrawer') appDrawer: ElementRef;

  Menu: any;
  Submenu: any;
  @Input() item: any;

  constructor(public router: Router) {
  }

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

  onItemSelected(item: any){
    console.log(item);
    this.router.navigate(["menu/"+item.url]);
  }

}
