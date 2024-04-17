
export interface GetStationsByIdUserInterface {
    getStatByUser(user_id: number):Promise<any[] | null>;
}
