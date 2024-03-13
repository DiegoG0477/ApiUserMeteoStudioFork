import { User } from "../domain/User";
import { UserRepository } from "../domain/userRepository/UserRepository";

export class LoginUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(email: string, password: string): Promise<User | null> {
    try {
      const response = this.userRepository.login(email, password);
      return response;
    } catch (error) {
      return null;
    }
  }
}
