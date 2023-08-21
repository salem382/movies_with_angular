import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject} from 'rxjs';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Route:Router) {

    if(localStorage.getItem("userToken")) 
      this.decodeUserData();
    }
  user = new BehaviorSubject(null);
  decodeUserData():void {
    this.user.next(jwt_decode(JSON.stringify(localStorage.getItem('userToken'))));
  }
  signUp(userData:object):Observable<any> {
    return this._HttpClient.post("http://localhost:3000/signup", userData);
  }
  signIn(userData:object):Observable<any> {
    return this._HttpClient.post("http://localhost:3000/signin", userData);
  }
  signOut():void {
    localStorage.removeItem("userToken");
    this._Route.navigate(['/login']);
    this.user.next(null);
  }
}
