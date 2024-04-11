import { Request, Response } from "express";
import { LoginService } from "../../aplication/ILoginService";

export class LoginUserController {
  private readonly loginService: LoginService;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  async login(req: Request, res: Response) {
    const data = req.body;
    try {
      const response = await this.loginService.login(data.email, data.password);
      
      return res.status(200).json({
        token: response,
      });
    } catch (error) {
      return null;
    }
  }
}
