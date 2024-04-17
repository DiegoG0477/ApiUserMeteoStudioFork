import { Acces } from "../Domain/Acces";
import { AccesReposritory } from "../Domain/AccesRepository/AccesRepository";

export class CreateAccesUseCase{
    constructor(readonly accesRepository: AccesReposritory){}

    async run(user_id: number, id_station:number):Promise<Acces| null>{
        try {
            const acces = await this.accesRepository.createAcces(user_id,id_station);
            return acces;
        } catch (error) {
            return null
        }
    }
}