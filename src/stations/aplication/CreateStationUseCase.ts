import { Station } from "../domain/Station";
import { StationRepository } from "../domain/stationRepository/StationRepository";

export class CreateStationUseCase {
  constructor(readonly stationRepository: StationRepository) {}

  async run(
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
      const station = await this.stationRepository.createStation(
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
      return station;
    } catch (error) {
      return null;
    }
  }
}
