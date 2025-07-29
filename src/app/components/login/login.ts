import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);


  loginForm: FormGroup = this._FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^\w{6,}$/)]]
  });

  LoginSubmition(): void {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value);
      const data = this.loginForm.value;
      const success = this._AuthService.login(data.email, data.password);
      if (success) {
      this._Router.navigate(['/dashboard']);
    } else {
      alert('Invalid email or password');
    }
    }
  }
}
