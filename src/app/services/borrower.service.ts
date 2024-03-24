import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Borrower } from '../models/borrower.model';

@Injectable({
  providedIn: 'root'
})
export class BorrowerService {

  private apiUrl = 'https://yourapiendpoint.com/api/addresses';

  constructor(private http: HttpClient) {}

  getBorrowerById(id: number): Observable<Borrower> {
    return this.http.get<Borrower>(`${this.apiUrl}/${id}`);
  }

  submitBorrower(borrower: Borrower): Observable<Borrower> {
    if (borrower.id) {
      return this.http.put<Borrower>(`${this.apiUrl}/${borrower.id}`, borrower);
    } else {
      return this.http.post<Borrower>(this.apiUrl, borrower);
    }
  }
}