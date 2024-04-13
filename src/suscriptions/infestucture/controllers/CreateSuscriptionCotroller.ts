import { CreateSuscriptionUseCase } from "../../aplication/CreateSuscriptionUseCase";
import { Request, Response } from "express";

export class CreateSuscriptionController {
  constructor(readonly createSuscriptionUseCase: CreateSuscriptionUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const suscription = await this.createSuscriptionUseCase.run(
        data.active_plan_id,
        data.user_id,
        data.plan_expiration
      );

      if (suscription) {
        res.status(201).send({
          status: "succes",
          data: {
            id_suscription: suscription?.id_suscription,
            active_plan_id: suscription?.active_plan_id,
            user_id: suscription?.user_id,
            plan_expiration: suscription?.plan_expiration,
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
