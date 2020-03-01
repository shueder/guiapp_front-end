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

}
