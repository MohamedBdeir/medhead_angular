import { HospitalsModule } from "../hospitals/hospitals.module";
import { BaseResponse } from "./BaseResponse";
import { Hopital } from "./Hopital";

export interface GetAllHopitalResponse extends BaseResponse
{
    data: Array<Hopital>;
}