import { BaseResponse } from "./BaseResponse";

export interface AuthenticateResponse extends BaseResponse
{
    token: string
}