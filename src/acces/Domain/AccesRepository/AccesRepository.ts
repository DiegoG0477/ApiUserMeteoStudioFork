import { Acces } from "../Acces";
export interface AccesReposritory{
    createAcces(
        user_id:number,
        id_station:number
    ):Promise <Acces| null>
    validateAcces(
        user_id: number,
        id_station: number
    ):Promise <Acces | null>

    getAccesByIdUser(
        user_id:number
    ):Promise<Acces []| null>
}