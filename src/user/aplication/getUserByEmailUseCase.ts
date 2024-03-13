import { User } from "../domain/User";
import { UserRepository } from "../domain/userRepository/UserRepository";

export class GetUserByEmail {
  constructor(readonly userRepository: UserRepository) {}

  async run(email: string): Promise<User | null> {
    try {
      const user = this.userRepository.getbyEmail(email);
      return user;
    } catch (error) {
      return null;
    }
  }
}
