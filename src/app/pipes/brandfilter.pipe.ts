import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from '../models/Dto/cardetaildto';

@Pipe({
  name: 'brandfilter'
})
export class BrandfilterPipe implements PipeTransform {

  transform(value: CarDetailDto[], brandFilter: string): CarDetailDto[] {
    brandFilter = brandFilter?brandFilter.toLocaleLowerCase():"";
    return brandFilter?value.filter((c:CarDetailDto)=>c.brandName.toLocaleLowerCase().indexOf(brandFilter)!==-1):value;
  }

}
