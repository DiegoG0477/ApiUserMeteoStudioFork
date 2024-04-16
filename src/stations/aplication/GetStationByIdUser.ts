import { Station } from "../domain/Station";
import { StationRepository } from "../domain/stationRepository/StationRepository";

export class GetStationByIdUserUseCase {
  constructor(readonly stationRepository: StationRepository) {}

  async run(user_id: number): Promise<Station[] | null> {
    try {
      const stations = await this.stationRepository.getStationsByIdUser(
        user_id
      );
      return stations;
    } catch (error) {
      return null;
    }
  }
}
