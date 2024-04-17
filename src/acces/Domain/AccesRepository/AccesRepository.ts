import { Acces } from "../Acces";
export interface AccesReposritory{
    createAcces(
        user_id:number,
        id_station:number
    ):Promise <Acces| null>
}