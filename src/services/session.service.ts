import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private psitKey = 'psitid';
  private usernameKey = 'username';

  constructor() {}

  // PSIT ID
  setPsitId(psitid: string) {
    sessionStorage.setItem(this.psitKey, psitid);
  }

  getPsitId(): string | null {
    return sessionStorage.getItem(this.psitKey);
  }

  // Username
  setUsername(username: string) {
    sessionStorage.setItem(this.usernameKey, username);
  }

  getUsername(): string | null {
    return sessionStorage.getItem(this.usernameKey);
  }

  // Clear session
  clearSession() {
    sessionStorage.removeItem(this.psitKey);
    sessionStorage.removeItem(this.usernameKey);
    sessionStorage.clear(); // Optionally clears everything
  }
}
