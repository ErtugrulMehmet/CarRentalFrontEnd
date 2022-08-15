import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carimage';
import { CartItem } from 'src/app/models/cartItem';
import { Color } from 'src/app/models/color';
import { CarDetailDto } from 'src/app/models/Dto/cardetaildto';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { CartService } from 'src/app/services/cart.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  dataLoaded = false;
  currentCar: Car;
  brandFilterList: number = 0;
  colorFilterList: number = 0;
  carByDetail: CarDetailDto[];
  carsByDetail: CarDetailDto[];
  carsByBrand: Car[];
  carsByColor: Car[];
  colors: Color[] = [];
  carImagesById: CarImage[];
  currentCarDetail: CarDetailDto;
  car: CarImage[];
  carFilter = '';
  colorFilter = '';
  brandFilter = '';
  filterText = '';

  constructor(
    private carService: CarService,
    private carImageService: CarimageService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private colorService: ColorService,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getAllBrands();
    this.getAllColors();
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarDetailByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarDetailByColorId(params['colorId']);
      } else {
        this.getCarsByDetail();
      }
    });
  }

  getImagePath(imagePath: string) {
    return this.carImageService.getImagePath(imagePath);
  }
 
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColorId(colorId: number) {
    this.carService.getCarsByBrandId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByDetail() {
    this.carService.getCarDetails().subscribe((response) => {
      this.carsByDetail = response.data;
    });
  }
  getCarDetailById(Id: number) {
    this.carService.getCarDetailsByCarId(Id).subscribe((response) => {
      this.carByDetail = response.data;
    });
  }
  getCarDetailByBrandId(Id: number) {
    this.carService.getCarDetailsByCarId(Id).subscribe((response) => {
      this.carsByDetail = response.data;
    });
  }
  getCarDetailByColorId(colorId: number) {
    this.carService.getCarDetailsByColorId(colorId).subscribe((response) => {
      this.carsByDetail = response.data;
    });
  }

  getCarDetailByBrandAndColor(colorId: number, brandId: number) {
    this.carService
      .getCarDetailByBrandAndColor(colorId, brandId)
      .subscribe((response) => {
        this.carsByDetail = response.data;
      });
  }
  getCarImagesById(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImagesById = response.data;
    });
  }
  setCurrentCarDetail(car: CarDetailDto) {
    this.currentCarDetail = car;
  }

  getSelectedColor(colorId: number) {
    if (this.colorFilterList == colorId) return true;
    else return false;
  }

  getSelectedBrand(brandId: number) {
    if (this.brandFilterList == brandId) return true;
    else return false;
  }

  getAllColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getAllBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  addToCart(car: CarDetailDto) {
    this.toastrService.success('Kiralama Sepetine Eklendi', car.description);
    this.cartService.addToCart(car);
  }
}
