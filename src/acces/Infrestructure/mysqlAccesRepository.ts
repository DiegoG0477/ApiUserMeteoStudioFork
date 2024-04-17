import { query } from "../../db/mysql";
import { AccesReposritory } from "../Domain/AccesRepository/AccesRepository";
import { Acces } from "../Domain/Acces";

export class MysqlAccesRepository implements AccesReposritory {
  async getAccesByIdUser(user_id: number): Promise<Acces [] | null> {
    const sql = "SELECT * FROM acces WHERE user_id=?";
    try {
      const [data]: any = await query(sql, [user_id]);
      const dataAcces = Object.values(JSON.parse(JSON.stringify(data)));
      return dataAcces.map(
        (acc: any)=>
          new Acces(
            acc.acces_id,
            acc.user_id,
            acc.station_id
          )
      )
      
    } catch (error) {
      return null
    }

  }
  async validateAcces(
    user_id: number,
    id_station: number
  ): Promise<Acces | null> {
    let response = null;
    const sql = "SELECT * FROM acces WHERE user_id=? AND station_id=?";
    try {
      const [acces]: any = await query(sql, [user_id, id_station]);
      const acc = new Acces(
        acces[0].acces_id,
        acces[0].user_id,
        acces[0].station_id
      )
      console.log(acc, "query")
      response = acc
    } catch (error) {
      response = null;
    } finally {
      return response;
    }
  }

  async createAcces(
    user_id: number,
    id_station: number
  ): Promise<Acces | null> {
    let station = null;
    const sql = "INSERT INTO acces (user_id, station_id) VALUES (?,?)";
    const params: any[] = [user_id, id_station];
    try {
      const [acces]: any = await query(sql, params);
      station = new Acces(acces.acces_id, user_id, id_station);
    } catch (error) {
      return null;
    } finally {
      return station;
    }
  }
}
