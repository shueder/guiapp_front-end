import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login/login.service';
import { Router } from '@angular/router';
import { Evento } from '../../../interfaces/Event';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  constructor(private loginService: LoginService,private _router: Router) { }   
  event:Evento = {
    id:0,
    evento: "",
    ubicacion: "",
    fecha: "",
    descripcion: ""
  }

  event2:Evento = {
    id:0,
    evento: "",
    ubicacion: "",
    fecha: "",
    descripcion: ""
  }
  list_events: any;
  event_id:number;

  ngOnInit(): void {
    this.getEventsAll();
  }
  getEventsAll(){
    this.loginService.getEvent().subscribe((data: any)=>{
      console.log(data);
     this.list_events = data.content;
    }); 
    
 }



 borrarevent(event: any){
  this.loginService.deleteEvent(this.event2.id).subscribe((data:any)=>{
    console.log("data");
    if(!data.status){
      alert(data.message);
    }else{
      alert(data.message);
    }
  });
}


agregar(){
  this.loginService.postAdd(this.event2).subscribe((data:any)=>{
    console.log(data);
    if(!data.status){
      alert(data.message);
    }else{
      alert(data.message);
    }
  });
}

editarevent(){
  this.loginService.putEvent(this.event2,this.event2.id).subscribe((data:any)=>{
    console.log(data);
    if(!data.status){
      alert(data.message);
    }
  });
}

 verevent(event: any){
  this.event_id = event.id;
  this.event2 = event;
  console.log(event);
}

}
