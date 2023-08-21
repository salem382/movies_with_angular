import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean = false;

  constructor (private _AuthServes:AuthService) {}

  ngOnInit(): void {
    this._AuthServes.user.subscribe({
      next:() => {
        if(this._AuthServes.user.getValue()) 
          this.isLogin = true;
        else
          this.isLogin = false;
      }
    })  
  }
  logOut():void {
    this._AuthServes.signOut();
  } 
}

