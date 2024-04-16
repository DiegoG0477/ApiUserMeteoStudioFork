import { Station } from "../Station";

export interface StationRepository {
    getStationByid(id_station: number):Promise <Station | null>
    getAllStations():Promise<Station[]| null>
    getStationsByIdUser(owner_id: number):Promise<Station[] | null>
    createStation(
        name:string,
        addres:string,
        state_id:number,
        latitude:number,
        lenght:number,
        height:number,
        municipality_id:number,
        type_id:number,
        owner_id:number
    ):Promise<Station | null>
    updateStation(
        id_station:number,
        name:string,
        addres:string,
        state_id:number,
        latitude:number,
        lenght:number,
        height:number,
        municipality_id:number,
        type_id:number,
        owner_id:number
    ):Promise<Station| null>
    deleteStattionByid(id_station:number):Promise <Station | null>
}