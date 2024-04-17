import { ValidateAccesUseCase } from "../../Aplication/ValidateAccessUseCase";
import { Request,Response, response } from "express";

export class ValidateAccesController{
    constructor (readonly validateAccesUseCase: ValidateAccesUseCase){}

    async run (req: Request, res: Response){
        const data = req.body;
        try {
            const acces = await this.validateAccesUseCase.run(data.user_id, data.id_station);

            if (acces) {
                res.status(201).send({
                    response: true,
                    msn:"Acceso Autorizado"
                })
            }else{
                res.status(400).send({
                    status:"error",
                    msn:" Ocurrio Un Error"
                })
            }
            
        } catch (error) {
            res.status(204).send({
                status:"error",
                msn:" Ocurrio Un Error"
            })
        }
    }
}