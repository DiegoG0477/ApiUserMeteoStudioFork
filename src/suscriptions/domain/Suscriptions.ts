export class Suscription {
  constructor(
    readonly id_suscription: number,
    readonly active_plan_id: number,
    readonly user_id: number,
    readonly plan_expiration: string
  ) {}
}
