import { CardetailComponent } from "src/app/components/cardetail/cardetail.component";
import { ResponseModel } from "../responsemodel";
import { CarDetailDto } from "./cardetaildto";

export interface CarDetailDtoResponseModel extends ResponseModel{
    data: CarDetailDto[];
}