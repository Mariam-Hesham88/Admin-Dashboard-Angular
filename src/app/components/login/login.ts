import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);


  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]]
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
