import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserForLogin, UserForRegister } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

  authUser(user: UserForLogin){
    return this.http.post('https://localhost:44335/api/Account', user);
  }
  registerUser(user: UserForRegister){
    return this.http.post('https://localhost:44335/api/Registration', user);
  }


}
