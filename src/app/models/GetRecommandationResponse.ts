import { BaseResponse } from "./BaseResponse";
import { Hopital } from "./Hopital";
import {Recommandation} from './Recommandation'

export interface GetRecommandationResponse extends BaseResponse
{

    recommandations: Array<Recommandation>;

}