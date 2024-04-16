import { User } from "../../domain/User";

export interface AuthService {
  login(username: string, password: string): Promise<string| null>;
}
