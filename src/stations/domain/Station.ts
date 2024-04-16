export class Station{
    constructor(
        readonly id_station: number,
        readonly name: string,
        readonly addres:string,
        readonly state_id:number,
        readonly latitude: number,
        readonly lenght: number,
        readonly height: number,
        readonly municipality_id:number,
        readonly type_id: number,
        readonly owner_id:number
    ){}
}