import { CreateSuscriptionUseCase } from "../aplication/CreateSuscriptionUseCase";

import { MysqlSuscriptionRepository } from "./MysqlSuscriptionsRepository";

import { CreateSuscriptionController } from "./controllers/CreateSuscriptionCotroller";


export const mysqlSuscriptionRepository = new MysqlSuscriptionRepository();

export const createSuscriptionUseCase = new CreateSuscriptionUseCase(mysqlSuscriptionRepository);


export const createSuscriptionController = new CreateSuscriptionController(createSuscriptionUseCase);