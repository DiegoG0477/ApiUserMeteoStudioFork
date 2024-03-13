import { User } from "../User";

export interface UserRepository{
    login(email : string, password: string): Promise <User | null>;
    registerUser(
        name : string,
        email: string,
        password : string ,
        first_last_name: string,
        second_last_name: string,
        birthdate :string
    ): Promise <User | null>;
    getUsers(): Promise <User[]| null>;
    getById(id: number  ): Promise<User | null>;
    getbyEmail(email:string): Promise<User | null>;
}