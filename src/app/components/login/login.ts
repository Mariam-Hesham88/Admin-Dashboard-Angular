import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);


  loginForm:FormGroup = this._FormBuilder.group({
    email:[null,[Validators.required, Validators.email]],
    password:[null,[Validators.required, Validators.pattern(/^\w{6,}$/)]]
  });

  LoginSubmition():void{
    console.log(this.loginForm.value);
    this._Router.navigate(['/dashboard']);
    // if(localStorage.getItem('UserData') != this.loginForm.value){
    //   this._Router.navigate(['/dashboard'])
    // }
    // else{
    //   console.log("not match")
    // }
  }
}
