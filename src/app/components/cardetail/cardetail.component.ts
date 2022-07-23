import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/Dto/cardetaildto';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  carDetails: CarDetailDto[] = [];
  constructor(private cardetailservice: CarDetailService) {}

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails() {
    this.cardetailservice.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
}
