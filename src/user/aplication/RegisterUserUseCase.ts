import { User } from "../domain/User";
import { UserRepository } from "../domain/userRepository/UserRepository";
import { IEncryptService } from "../../shared/bcrypt/aplication/IEncryptService";

export class RegisterUserUseCase {
  constructor(readonly userRepository: UserRepository,
  readonly iEncryptedService: IEncryptService

  ) {}

  async run(
    name: string,
    email: string,
    password: string,
    first_last_name: string,
    second_last_name: string,
    birthdate: string,
    type_id : number
  ): Promise<User | null> {
    
    const encode = this.iEncryptedService.encodePassword(password);
    try {
      const user = await this.userRepository.registerUser(
        name,
        email,
        encode,
        first_last_name,
        second_last_name,
        birthdate,
        type_id
      );
      if(user){
        // envio a cola de broker 
      }
      return user;
    } catch (error) {
      return null;
    }
  }
}
