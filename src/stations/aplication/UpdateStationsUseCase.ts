import { Station } from "../domain/Station";
import { StationRepository } from "../domain/stationRepository/StationRepository";

export class UpdateStationUseCase {
  constructor(readonly stationRepository: StationRepository) {}

  async run(
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
    try {
      const station = await this.stationRepository.updateStation(
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
      console.log(station);

      return station;
    } catch (error) {
      return null;
    }
  }
}
