import { BaseResponse } from "./BaseResponse";

export interface CountInvalidResponse extends BaseResponse
{
    invalidCount: number
}