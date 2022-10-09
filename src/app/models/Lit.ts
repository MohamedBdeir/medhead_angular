import { Hopital } from "./Hopital";
import { Specialite } from "./Specialite";

export interface Lit
{
    hopital: Hopital;
    specialite: Specialite;
    libre: boolean
}