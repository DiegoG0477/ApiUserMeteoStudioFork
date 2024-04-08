import { Request,Response } from "express";
import { LoginService } from "../../aplication/service/LoginService";

export class LoginUserController {
    constructor( readonly loginService: LoginService){}

    async run(req: Request , res :Response){
        const data = req.body;
        try {
            const response = await this.loginService.run(data.email, data.password);
            
            return response
        } catch (error) {
            return null
        }
       
    }
}