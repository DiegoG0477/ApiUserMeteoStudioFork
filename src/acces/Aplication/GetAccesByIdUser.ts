import { Acces } from "../Domain/Acces";
import { AccesReposritory } from "../Domain/AccesRepository/AccesRepository";
import { StationRepository } from "../../stations/domain/stationRepository/StationRepository";
export class GetAccesByIdUserUseCase {
  constructor(
    readonly accesReposritory: AccesReposritory,
    readonly stationRepository: StationRepository
  ) {}

  async run(user_id: number): Promise<Acces[] | null> {
    try {
      console.log(user_id);
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
      return acces;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
