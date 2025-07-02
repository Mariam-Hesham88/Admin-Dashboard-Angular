import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ ReactiveFormsModule, RouterLink ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);

  registerForm : FormGroup = this._FormBuilder.group({
    name:[null,[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email:[null,[Validators.required, Validators.email]],
    password:[null,[Validators.required, Validators.pattern(/^\w{6,}$/)]]
  });

  RegisterSubmition():void{
    console.log(this.registerForm.value);
    localStorage.setItem('UserData', this.registerForm.value);
    this._Router.navigate(['/login']);
  }
}
