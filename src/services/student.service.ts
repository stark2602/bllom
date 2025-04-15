import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'https://retoolapi.dev/XeewL2/data';
  

  constructor(private http: HttpClient) {}

  getStudentByPsitId(psitId: Number): Observable<any> {
    // The API expects a query param: ?PSIT ID=xxxx
    return this.http.get<any[]>(`${this.baseUrl}?PSIT%20ID=${psitId}`);
  }

  updateStudent(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
