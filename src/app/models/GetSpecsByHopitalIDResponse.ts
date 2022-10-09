import { BaseResponse } from "./BaseResponse";
import { Specialite } from "./Specialite";

export interface GetSpecsByHopitalIDResponse extends BaseResponse
{
    specs: Array<Specialite>
}