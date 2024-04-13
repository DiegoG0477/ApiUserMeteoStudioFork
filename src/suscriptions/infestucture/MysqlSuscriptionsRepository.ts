import { query } from "../../db/mysql";
import { Suscription } from "../domain/Suscriptions";
import { SuscriptionRepository } from "../domain/suscriptionRepository/SuscriptionsRepository";

export class MysqlSuscriptionRepository implements SuscriptionRepository {
    getSuscriptionByIdUser(id_user: number): Promise<Suscription | null> {
        throw new Error("Method not implemented.");
    }
    async getSuscriptionByid(id: number): Promise<Suscription | null> {
        throw new Error("Method not implemented.");
    }


    async createSuscription(user_id: number, active_plan_id: number, plan_expiration: string): Promise<Suscription | null> {
        let suscription = null;
        const sql = "INSERT INTO suscriptions (active_plan_id,user_id,plan_expiration) VALUES (?,?,?)"
        const params: any [] = [
            active_plan_id,
            user_id,
            plan_expiration
        ]
        try {
            const [suscriptionR]: any = await query (sql,params);
            suscription = new Suscription(
                suscriptionR.id,
                active_plan_id,
                user_id,
                plan_expiration
            );

        } catch (error) {
           suscription = null
        }finally{
            return suscription
        }
    }

    async updateSuscription(id: number): Promise<Suscription | null> {
        throw new Error("Method not implemented.");
    }
    async deleteSuscription(id: number): Promise<Suscription | null> {
        throw new Error("Method not implemented.");
    }
     
}
