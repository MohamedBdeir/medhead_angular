import { BaseResponse } from "./BaseResponse";
import { Specialite } from "./Specialite";

export interface GetSpecByGroupeIdResponse extends BaseResponse
{
    specialites: Array<Specialite>;
}