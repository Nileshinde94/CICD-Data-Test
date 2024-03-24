import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from 'src/app/models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = 'https://your-api-url/api/address'; // Update with your API URL

  constructor(private http: HttpClient) {}

  getAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl);
  }

  addAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.apiUrl, address);
  }
}