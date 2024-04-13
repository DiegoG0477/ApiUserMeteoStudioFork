import { Suscription } from "../domain/Suscriptions";
import { SuscriptionRepository } from "../domain/suscriptionRepository/SuscriptionsRepository";

export class CreateSuscriptionUseCase {
  constructor(readonly suscriptionRepository: SuscriptionRepository) {}

  async run(active_plan_id: number, user_id: number, plan_expiration: string):Promise<Suscription | null> {
    try {
      const suscription = this.suscriptionRepository.createSuscription(
        active_plan_id,
        user_id,
        plan_expiration
      );
      return suscription;
    } catch (error) {
      return null;
    }
  }
}
