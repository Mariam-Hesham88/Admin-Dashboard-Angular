import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  private readonly _Router = inject(Router);
  private readonly _AuthService = inject(AuthService);
  
  logout(): void {
    this._AuthService.logout();
    this._Router.navigate(['/login']);
  }
}

