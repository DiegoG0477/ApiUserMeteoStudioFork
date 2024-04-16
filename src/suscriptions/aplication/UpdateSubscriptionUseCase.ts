import { Subscription } from "../domain/Suscriptions";
import { SubscriptionRepository } from "../domain/suscriptionRepository/SuscriptionsRepository";

export class UpdateSubscriptionUseCase {
  constructor(readonly subscriptionRepository: SubscriptionRepository) {}

  async run(
    id_subscription: number,
    active_plan_id: number,
    user_id: number,
    plan_expiration: string
  ): Promise<Subscription | null> {
    try {
      console.log(id_subscription,active_plan_id,user_id,plan_expiration,"usecase params")

      const sub = await this.subscriptionRepository.updateSubscription(
        id_subscription,
        active_plan_id,
        user_id,
        plan_expiration
      );
      return sub;
    } catch (error) {
      return null;
    }
  }
}
