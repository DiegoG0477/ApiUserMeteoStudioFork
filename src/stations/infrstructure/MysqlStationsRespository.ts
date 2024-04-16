import { Station } from "../domain/Station";
import { StationRepository } from "../domain/stationRepository/StationRepository";
import { query } from "../../db/mysql";
import { stat } from "fs";

export class MysqlStationRepository implements StationRepository {
  async getStationByid(id_station: number): Promise<Station | null> {
    const sql = "SELECT * FROM stations WHERE id_station=?";
    const params: any[] = [id_station];
    try {
      const [result]: any = await query(sql, params);
      return new Station(
        result[0].id_station,
        result[0].name,
        result[0].addres,
        result[0].state_id,
        result[0].latitude,
        result[0].lenght,
        result[0].height,
        result[0].municipality_id,
        result[0].type_id,
        result[0].owner_id
      );
    } catch (error) {
      return null;
    }
  }

  async getAllStations(): Promise<Station[] | null> {
    const sql = "SELECT * FROM stations";
    try {
      const [data]: any = await query(sql, []);
      const dataStation = Object.values(JSON.parse(JSON.stringify(data)));
      return dataStation.map(
        (station: any) =>
          new Station(
            station.id_station,
            station.name,
            station.addres,
            station.state_id,
            station.latitude,
            station.lenght,
            station.height,
            station.municipality_id,
            station.type_id,
            station.owner_id
          )
      );
    } catch (error) {
      return null;
    }
  }
  async getStationsByIdUser(owner_id: number): Promise<Station[] | null> {
    const sql = "SELECT * FROm stations WHERE owner_id =?";
    try {
      const [data]: any = await query(sql, [owner_id]);
      const dataStations = Object.values(JSON.parse(JSON.stringify(data)));
      return dataStations.map(
        (station: any) =>
          new Station(
            station.id_station,
            station.name,
            station.addres,
            station.state_id,
            station.latitude,
            station.lenght,
            station.height,
            station.municipality_id,
            station.type_id,
            station.owner_id
          )
      );
    } catch (error) {
      return null;
    }
  }
  async createStation(
    name: string,
    addres: string,
    state_id: number,
    latitude: number,
    lenght: number,
    height: number,
    municipality_id: number,
    type_id: number,
    owner_id: number
  ): Promise<Station | null> {
    let station = null;
    const sql =
      "INSERT INTO stations (name, addres, state_id, latitude, lenght, height, municipality_id, type_id, owner_id) VALUES(?,?,?,?,?,?,?,?,?)";
    const params: any[] = [
      name,
      addres,
      state_id,
      latitude,
      lenght,
      height,
      municipality_id,
      type_id,
      owner_id,
    ];
    try {
      const [stationR]: any = await query(sql, params);
      station = new Station(
        stationR.id_station,
        name,
        addres,
        state_id,
        latitude,
        lenght,
        height,
        municipality_id,
        type_id,
        owner_id
      );
    } catch (error) {
      station = null;
    } finally {
      return station;
    }
  }

  async updateStation(
    id_station: number,
    name: string,
    addres: string,
    state_id: number,
    latitude: number,
    lenght: number,
    height: number,
    municipality_id: number,
    type_id: number,
    owner_id: number
  ): Promise<Station | null> {
    let station = null;
    const sql =
      "UPDATE stations SET name=?, addres=?, state_id=?, latitude=?, latitude=?, lenght=?, height=?, municipality_id=?, type_id=?, owner_id=? WHERE id_station=?";
    const params: any[] = [
      name,
      addres,
      state_id,
      latitude,
      lenght,
      height,
      municipality_id,
      type_id,
      owner_id,
      id_station
    ];
    try {
      station = new Station(
        id_station,
        name,
        addres,
        state_id,
        latitude,
        lenght,
        height,
        municipality_id,
        type_id,
        owner_id
      );
    } catch (error) {
      station = null;
    } finally {
      return station;
    }
  }

  async deleteStattionByid(id_station: number): Promise<Station | null> {
    throw new Error("Method not implemented.");
  }
}
