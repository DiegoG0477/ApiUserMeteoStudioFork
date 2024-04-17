import { UserRepository } from "../domain/userRepository/UserRepository";
import { IEncryptService } from "../../shared/bcrypt/aplication/IEncryptService";
import { AuthService } from "./service/LoginService";
import jwt from 'jsonwebtoken';

//use case get by id, email
export class LoginService implements AuthService {
  constructor(
    readonly userRepository: UserRepository,
    readonly iEncryptService: IEncryptService
  ) {}

  async login(email: string, password: string): Promise<string | null> {
    try {
      console.log(email, password);
      const user = await this.userRepository.getbyEmail(email);
      let passVerified = false;
      if (user) {
        passVerified = await this.iEncryptService.authPassword(password,user.password);
      }
      if (!passVerified) {
        return "Contraseña O Usuario Incorrectas"
      }
      let wordsecret = process.env.JWT_SECRET;
      const userId = user?.id;
      if (userId) {
        const token = jwt.sign(userId.toString(), wordsecret as string);
        return token;
      }
      return null
    } catch (error) {
      return null;
    }
  }
}
