import { BaseResponse } from "./BaseResponse";
import { Hopital } from "./Hopital";

export interface GetHopitalByUserIDResponse extends BaseResponse
{
    hopital: Hopital
}