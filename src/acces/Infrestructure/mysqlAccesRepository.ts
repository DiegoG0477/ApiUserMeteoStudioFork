import { query } from "../../db/mysql";
import { AccesReposritory } from "../Domain/AccesRepository/AccesRepository";
import { Acces } from "../Domain/Acces";

export class MysqlAccesRepository implements AccesReposritory{
    async createAcces(user_id: number, id_station: number): Promise<Acces | null> {
        let station = null;
        const sql = "INSERT INTO acces (user_id, station_id) VALUES (?,?)"
        const params : any[] = [
            user_id,
            id_station
        ]
        try {
            const [acces]: any = await query(sql,params);
            station = new Acces(
                acces.acces_id,
                user_id,
                id_station
            )
        } catch (error) {
            return null
        }
        finally{
            return station
        }
    }
    
}