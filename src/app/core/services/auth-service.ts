import { Injectable } from '@angular/core';
import { Iadmin } from '../interfaces/iadmin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'userData';

  constructor() { }

  register(admin: Iadmin): boolean {
    localStorage.setItem(this.storageKey, JSON.stringify(admin));
    return true;
  }

  login(email: string, password: string): boolean {
    const data = localStorage.getItem(this.storageKey);
    if (!data) return false;

    const user: Iadmin = JSON.parse(data);
    const isValid = user.email === email && user.password === password;

    if (isValid) {
      localStorage.setItem('auth', 'true');
    }

    return isValid;
  }

  getCurrentUser(): Iadmin | null {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem('auth');
  }
}


