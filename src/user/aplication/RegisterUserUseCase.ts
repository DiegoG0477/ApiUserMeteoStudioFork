import { User } from "../domain/User";
import { UserRepository } from "../domain/userRepository/UserRepository";

export class RegisterUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(
    name: string,
    email: string,
    password: string,
    first_last_name: string,
    second_last_name: string,
    birthdate: string
  ): Promise<User | null> {
    try {
      const user = await this.userRepository.registerUser(
        name,
        email,
        password,
        first_last_name,
        second_last_name,
        birthdate
      );
      if(user){
        // envio a cola de broker 
        //envio 
      }
      return user;
    } catch (error) {
      return null;
    }
  }
}
