import { GetAccesByIdUserUseCase } from "../../Aplication/GetAccesByIdUser";
import { Request,Response } from "express";

export class GetAccesByIdUserController{
    constructor(readonly getAccesByIdUserUseCase: GetAccesByIdUserUseCase){}

    async run (req : Request, res:Response){
        const user_id: number = parseInt(req.params.user_id);
        try {
            const acces = await this.getAccesByIdUserUseCase.run(user_id);
            if (acces) {
                res.status(201).send({
                    status:"succes"
                })
            }
            
        } catch (error) {
            
        }
    }
}