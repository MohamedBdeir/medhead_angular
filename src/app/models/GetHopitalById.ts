import { BaseResponse } from "./BaseResponse";
import { Hopital } from "./Hopital";

export interface GetHopitalById extends BaseResponse{
    data: Hopital
}