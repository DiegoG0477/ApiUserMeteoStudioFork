import { query } from "../../db/mysql";
import { Suscription } from "../domain/Suscriptions";
import { SuscriptionRepository } from "../domain/suscriptionRepository/SuscriptionsRepository";

export class MysqlUserRepository implements SuscriptionRepository {
    getSuscriptionByid(id: number): Promise<Suscription | null> {
        throw new Error("Method not implemented.");
    }
    createSuscription(user_id: number, active_plan: number, plan_expiration: string): Promise<Suscription | null> {
        throw new Error("Method not implemented.");
    }
    updateSuscription(id: number): Promise<Suscription | null> {
        throw new Error("Method not implemented.");
    }
    deleteSuscription(id: number): Promise<Suscription | null> {
        throw new Error("Method not implemented.");
    }
     
}
