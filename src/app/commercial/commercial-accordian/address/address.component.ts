import { Component } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { AddressService } from 'src/app/services/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  address: Address = {
    street: '',
    city: '',
    piCode:'',
    country: '',
    state: '',
    id: 0
  };

  constructor(private addressService: AddressService) {}

  countries = [
    { name: 'India', code: 'IN' },
    { name: 'United States', code: 'US' },
    { name: 'United Kingdom', code: 'UK' },
    // Add more countries as needed
  ];
  saveAddress(): void {
    this.addressService.addAddress(this.address)
      .subscribe(() => {
        console.log('Address added successfully:', this.address);
        // Optional: You can handle success response here
      }, (error) => {
        console.error('Error adding address:', error);
        // Optional: You can handle error response here
      });
  }
}