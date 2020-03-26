import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';


@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  postLogin(data: any) {
    return this.http.post(environment.apiUrl + '/usuario/login', data).pipe(map((response => {
      return response;
    })));
  }

  getEvent() {
    
    return this.http.get(environment.apiUrl + '/eventos',{
    }).pipe(map((response => {
      return response;
    })));
  }

  deleteEvent(id: any) {
    
    return this.http.delete(environment.apiUrl + '/eventos/delete/'+id).pipe(map((response => {
      console.log(id);
      return response;
    })));
  }

  postAdd(data: any) {
    return this.http.post(environment.apiUrl + '/eventos/register', data).pipe(map((response => {
      return response;
    })));
  }

  putEvent(data: any,id: any) {
    console.log(data);
    return this.http.put(environment.apiUrl + '/eventos/'+id, data).pipe(map((response => {
      return response;
    })));
  }

}
