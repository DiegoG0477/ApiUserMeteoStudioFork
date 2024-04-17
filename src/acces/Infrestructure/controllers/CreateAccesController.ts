import { CreateAccesUseCase } from "../../Aplication/CreateAccesUseCase";
import { Request, Response } from "express";

export class CreateAccesController {
  constructor(readonly createAccesUseCase: CreateAccesUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;

    try {
      const acces = await this.createAccesUseCase.run(
        data.user_id,
        data.id_station
      );
      if (acces) {
        res.status(201).send({
          status: "succes",
          data: {
            acces_id: acces.acces_id,
            user_id: acces.user_id,
            id_station: acces.id_station,
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
