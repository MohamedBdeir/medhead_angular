import { Addresse } from "./Adresse";
import { OSMAddress } from "./OSMAddress";

export interface GetAddressByCoordinates
{
    address: OSMAddress;
    display_name: string
}