import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router) {
  }
  userMessage:string = '';
  isLoading:boolean = false;
  signInForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.email ,Validators.required]),
    password:new FormControl('',[Validators.pattern('^[A-Z][a-z]{3,8}'),Validators.required]),
  }) 
  sendData(userData:FormGroup):void {
    this.isLoading = true;
    this._AuthService.signIn(userData.value).subscribe({
      next:(response)=> {
        if (response.message == "success") {
          localStorage.setItem("userToken", response.token)
          this._Router.navigate(['/']);
          this._AuthService.decodeUserData();
        } else {
          this.userMessage = response.message;
        }
        console.log(response);
      },
      error:(err)=> {
        console.log (err)
      },
      complete:()=> {
        this.isLoading = false;
      }
    })
  }
}
