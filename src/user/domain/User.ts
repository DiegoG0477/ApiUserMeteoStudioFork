export class User {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly first_last_name: string,
        readonly second_last_name: string,
        readonly birthdate: string,
        readonly type_id: number
    ){}
}