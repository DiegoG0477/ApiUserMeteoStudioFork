export class Suscription{
  constructor(
    readonly user_id: number,
    readonly active_plan: number,
    readonly plan_expiration: string
  ) {}
}
