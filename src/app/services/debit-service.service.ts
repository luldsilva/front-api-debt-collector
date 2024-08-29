import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebitServiceService {
  
  private apiUrl = 'http://localhost:5205/api/Debit';

  constructor(private http: HttpClient) { }

    getAllDebits(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/get-all-debit`);
    }
  
    createDebit(data: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/create-debit`, data);
    }
}