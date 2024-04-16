import { Station } from "../../domain/Station";
import { GetStationByidUseCase } from "../../aplication/GetStationByIdUseCase";
import { Response, Request } from "express";

export class GetStationByIdController {
  constructor(readonly getStationByidUseCase: GetStationByidUseCase) {}

  async run(req: Request, res: Response) {
    const id_station: number = parseInt(req.params.id_station);
    try {
      const station = await this.getStationByidUseCase.run(id_station);
      
      if (station) {
        res.status(201).send({
          status: "succes",
          data: {
            id_station: station.id_station,
            name: station.name,
            addres: station.addres,
            state_id: station.state_id,
            latitude: station.latitude,
            lenght: station.lenght,
            height: station.height,
            municipality_id: station.municipality_id,
            type_id: station.type_id,
            owner_id: station.owner_id,
          },
        });
      } else {
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
      }
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
