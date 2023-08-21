import { Component } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(private _AuthService:AuthService, private _Router:Router) {
  }
  userMessage:string = '';
  isLoading:boolean = false;
  signUpForm:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.minLength(3), Validators.maxLength(10),Validators.required]),
    age:new FormControl('',[Validators.min(3), Validators.max(60),Validators.required]),
    email:new FormControl('',[Validators.email ,Validators.required]),
    password:new FormControl('',[Validators.pattern('^[A-Z][a-z]{3,8}'),Validators.required]),
  }) 
  sendData(userData:FormGroup):void {
    this.isLoading = true;
    this._AuthService.signUp(userData.value).subscribe({
      next:(response)=> {
        if (response.message == "success") {
          this._Router.navigate(['/']);
        } else {
          this.userMessage = response.message;
        }
        console.log(response);
      },
      error:(err)=> {
        console.log (err)
      },
      complete:()=> {
        console.log ('complete')
        this.isLoading = false;
      }
    })
  }
}
