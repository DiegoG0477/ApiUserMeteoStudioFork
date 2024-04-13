import { Suscription } from "../Suscriptions";

export interface SuscriptionRepository {
  getSuscriptionByid(id: number): Promise<Suscription | null>;
  getSuscriptionByIdUser(id_user: number):Promise<Suscription|null>;
  createSuscription(
    user_id: number,
    active_plan_id: number,
    plan_expiration: string
  ): Promise<Suscription | null>;
  updateSuscription(id: number): Promise<Suscription | null>;
  deleteSuscription(id: number): Promise<Suscription | null>; 
}
