import { Addresse } from "./Adresse";
import { BaseResponse } from "./BaseResponse";

export interface GetAddressResposne extends BaseResponse
{
    
    addresses: Array<Addresse>

}