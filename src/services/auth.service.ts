import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://retoolapi.dev/XeewL2/data'; 

  constructor(private http: HttpClient) {}

  validateCredentials(username: string, password: string, psitid: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}&psitid=${psitid}`);
  }
}
