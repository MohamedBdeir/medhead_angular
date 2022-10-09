import { User } from "src/data";
import { BaseResponse } from "./BaseResponse";

export interface InvalidAccountsResponse extends BaseResponse
{

    invalidUsers: Array<User>

}