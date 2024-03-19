import { User } from "../../domain/User";
import { UserRepository } from "../../domain/userRepository/UserRepository";
//use case get by id, email
export class LoginService{
  constructor(readonly userRepository: UserRepository) {}

  async run(email: string, password: string) {
    try {

      
      //encriptar password recivida 

      //comparacion


      const response = true;
      return response;
    } catch (error) {
      return null;
    }
  }
}
