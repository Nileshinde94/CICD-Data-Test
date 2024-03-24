import { Component } from '@angular/core';
import { BorrowerService } from 'src/app/services/borrower.service';
import { Borrower } from 'src/app/models/borrower.model';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.css']
})
export class BorrowerComponent {
  borrowerData: Borrower = {} as Borrower;

  constructor(private borrowerservice: BorrowerService) {}

  ngOnInit(): void {
    // Example: Load address data with ID 1
    this.borrowerservice.getBorrowerById(1).subscribe({
      next: (data) => this.borrowerData = data,
      error: (error) => console.error('There was an error!', error)
    });
  }

  submitBorrowerData(): void {
    this.borrowerservice.submitBorrower(this.borrowerData).subscribe({
      next: (response) => console.log('Address data saved successfully', response),
      error: (error) => console.error('Error saving address data', error)
    });
  }
} 