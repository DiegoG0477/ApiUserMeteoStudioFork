import { GetAllStationsUseCase } from "../../aplication/GetAllStationsUseCase";
import { Response, Request } from "express";

export class GetAllStationsController {
  constructor(readonly getAllStiationUseCase: GetAllStationsUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const station = await this.getAllStiationUseCase.run();
      if (station) {
        res.status(201).send({
          status: "succes",
          data: station.map((stat: any) => {
            return {
              id_station: stat.id_station,
              name: stat.name,
              address:stat.addres,
              state_id: stat.state_id,
              latitude: stat.latitude,
              lenght: stat.lenght,
              height: stat.height,
              municipality_id: stat.municipality_id,
              type_id: stat.type_id,
              owner_id: stat.owner_id,
            };
          }),
        });
      }else {
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema ",
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
