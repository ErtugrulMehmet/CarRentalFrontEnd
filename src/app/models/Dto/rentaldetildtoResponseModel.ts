import { ResponseModel } from "../responsemodel";
import { RentalDetailDto } from "./rentaldetaildto";

export interface RentalDetailResponseModel extends ResponseModel{
    data: RentalDetailDto[];
}