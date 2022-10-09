import { OSMAddress } from "./OSMAddress"

export interface Addresse 
{
    place_id: number
    boundingbox: Array<String>
    lat: string
    lon: string
    display_name: string
    icon: string,
    type:string
    address: OSMAddress

}