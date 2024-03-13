export class User {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly first_last_name: string,
        readonly second_last_name: string,
        readonly email: string,
        readonly passwoed: string,
        readonly birthdate: string
    ){}
}