import { stat } from "fs";
import { Station } from "../domain/Station";
import { StationRepository } from "../domain/stationRepository/StationRepository";

export class GetAllStationsUseCase {
  constructor(readonly stationRepository: StationRepository) {}

  async run(): Promise<Station[] | null> {
    try {
      const station = await this.stationRepository.getAllStations();
      return station;
    } catch (error) {
      return null;
    }
  }
}
