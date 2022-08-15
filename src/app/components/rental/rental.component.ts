import { Component, OnInit } from '@angular/core';
import { RentalDetailDto } from 'src/app/models/Dto/rentaldetaildto';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = []
  rentalsByDetail: RentalDetailDto[] =[]
  

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
    this.getRentalsByDetail();
  }
  getRentals() {
    this.rentalService.getRentals().subscribe((response => {
      this.rentals = response.data;
    }))
  }
  getRentalsByDetail() {
    this.rentalService.getRentalDetails().subscribe((response => {
      this.rentalsByDetail = response.data;
    }))
  }
}
