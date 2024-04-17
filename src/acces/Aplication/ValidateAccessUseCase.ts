import { Acces } from "../Domain/Acces";
import { AccesReposritory } from "../Domain/AccesRepository/AccesRepository";

export class ValidateAccesUseCase {
    constructor ( readonly accesRepository: AccesReposritory){}

    async run (user_id:number, id_station:number):Promise <Acces | null>{
        try {
            const acces = await this.accesRepository.validateAcces(user_id, id_station);
            console.log(acces)
            return acces
        } catch (error) {
            return null
        }
    }
}