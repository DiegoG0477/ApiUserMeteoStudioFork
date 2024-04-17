import { StationRepository } from "../../stations/domain/stationRepository/StationRepository";
import { AccesReposritory } from "../Domain/AccesRepository/AccesRepository";
import { GetStationsByIdUserInterface } from "./service/GetStationsByUserService";

export class GetStationsByIdUser implements GetStationsByIdUserInterface {
  constructor(
    readonly stationRepository: StationRepository,
    readonly accesReposritory: AccesReposritory
  ) {}
  async getStatByUser(user_id: number): Promise<any[] | null> {
    try {
      const acces = await this.accesReposritory.getAccesByIdUser(user_id);
      let promiseList: Promise<any>[] = []; 
      acces?.forEach(async (acc) => {
        promiseList.push(this.stationRepository.getStationByid(acc.id_station));
      });

      const resolvedStations = await Promise.all(promiseList);

      let list = resolvedStations.map((station) => ({
        id_station: station?.id_station,
        name: station?.name,
      }));

      console.log(list);
      return list;
    } catch (error) {
      return null;
    }
  }
}
