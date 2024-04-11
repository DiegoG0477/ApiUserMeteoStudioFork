import { RegisterUserUseCase } from "../../aplication/RegisterUserUseCase";
import { Request, Response } from "express";

export class RegisterUserController {
  constructor(readonly registerUserUseCase: RegisterUserUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const user = await this.registerUserUseCase.run(
        data.name,
        data.email,
        data.password,
        data.first_last_name,
        data.second_last_name,
        data.birthdate,
        data.type_id
      );

      if (user) {
        res.status(201).send({
          status: "succes",
          data: {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            password: user?.password,
            first_last_name: user?.first_last_name,
            second_last_name: user?.second_last_name,
            birthdate: user?.birthdate,
            type_id: user?.type_id,
          },
        });
      } else
        res.status(204).send({
          status: "error",
          data: "No fue posible realizar el registro",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
