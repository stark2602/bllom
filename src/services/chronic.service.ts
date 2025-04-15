import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChronicService {
//   private apiUrl = 'https://api-generator.retool.com/Uu3b8V/data';
  private apiUrl = 'https://retoolapi.dev/XeewL2/data';

  constructor(private http: HttpClient) {}

  getHistoryByPsitId(psitId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?PSIT%20ID=${psitId}`);
  }

  getAllHistory(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addHistory(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateHistory(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteHistory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
