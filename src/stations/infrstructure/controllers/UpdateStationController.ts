import { UpdateStationUseCase } from "../../aplication/UpdateStationsUseCase";
import { Request, Response } from "express";

export class UpdateStationsController {
  constructor(readonly updateStationUseCase: UpdateStationUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const station = await this.updateStationUseCase.run(
        data.id_station,
        data.name,
        data.addres,
        data.state_id,
        data.latitude,
        data.lenght,
        data.height,
        data.municipality_id,
        data.type_id,
        data.owner_id
      );
      if (station) {
        res.status(201).send({
          status: "succes",
          data: {
            id_station: station.id_station,
            name: station.name,
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
        res.status(204).send({
          status: "error",
          data: "No fue posible realizar el registro",
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
