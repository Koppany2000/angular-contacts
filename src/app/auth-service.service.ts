import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { map, Observable } from 'rxjs';
import { LoginResponse } from './login-response.payload';
import { LoginRequestPayload } from './LoginRequestPayload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private httpClient: HttpClient,private localStorage: LocalStorageService
  ) { }

  login(loginRequestPayload:LoginRequestPayload): Observable<boolean>{
    return this.httpClient.post<LoginResponse>('http://localhost:8080/login',loginRequestPayload)
    .pipe(map(data => {
      this.localStorage.store('authenticationToken',data.jwt);
      
      return true;
    }));
  }
  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
 }


}
