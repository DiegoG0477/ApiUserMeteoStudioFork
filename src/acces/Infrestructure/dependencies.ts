import { CreateAccesUseCase } from "../Aplication/CreateAccesUseCase";
import { CreateAccesController } from "./controllers/CreateAccesController";
import { MysqlAccesRepository } from "./mysqlAccesRepository";

export const  mysqlAccesRepository = new MysqlAccesRepository ();
export const createAccesUseCase = new CreateAccesUseCase(mysqlAccesRepository);
export const createAccesController = new CreateAccesController(createAccesUseCase);