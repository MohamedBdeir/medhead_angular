import { BaseResponse } from "./BaseResponse";
import { Specialite } from "./Specialite";

export interface GetAllSpecialiteResponse extends BaseResponse
{
    specialites: Array<Specialite>;
}