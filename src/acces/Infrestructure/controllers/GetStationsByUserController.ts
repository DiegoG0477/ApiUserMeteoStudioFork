import { GetStationsByIdUser } from "../../Aplication/getStationsByUserIdService";
import { Response, Request } from "express";

export class GetStationsByUserServiceController {
  constructor(readonly getStationsByIdUser: GetStationsByIdUser) {}

  async run(req: Request, res: Response) {
    const user_id: number = parseInt(req.params.user_id);
    try {
      const list = await this.getStationsByIdUser.getStatByUser(user_id);
      if (list) {
        res.status(201).send({
          status: "succes",
          data: list,
        });
      } else {
        res.status(400).send({
          status: "error",
          msn: "ocurrio un error",
        });
      }
    } catch (error) {
      res.status(400).send({
        status: "error",
        msn: "ocurrio un error",
      });
    }
  }
}
