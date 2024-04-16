import { Request, Response } from "express";
import { GetUSerByIdUseCase } from "../../aplication/GetUserByIdUseCase";

export class GetUserByIdController {
  constructor(readonly getUserByIdUseCase: GetUSerByIdUseCase) {}

  async run(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const user = await this.getUserByIdUseCase.run(id);
      if (user) {
        res.status(200).send({
          status: "success",
          data: {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            first_last_name: user.first_last_name,
            second_last_name: user.second_last_name,
            birthdate: user.birthdate,
            type_id : user.type_id
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
