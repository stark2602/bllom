import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const psitId = sessionStorage.getItem('psitId');
    if (psitId) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}
