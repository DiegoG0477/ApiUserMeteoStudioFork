import { Station } from "../domain/Station";
import { StationRepository } from "../domain/stationRepository/StationRepository";

export class GetStationByidUseCase {
  constructor(readonly stationRepository: StationRepository) {}

  async run(id_station: number): Promise<Station | null> {
    try {
      const station = await this.stationRepository.getStationByid(id_station);
      return station;
    } catch (error) {
      return null;
    }
  }
}
