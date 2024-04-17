import { CreateAccesUseCase } from "../Aplication/CreateAccesUseCase";
import { ValidateAccesUseCase } from "../Aplication/ValidateAccessUseCase";
import { GetAccesByIdUserUseCase } from "../Aplication/GetAccesByIdUser";
import { GetStationsByIdUser } from "../Aplication/getStationsByUserIdService";
import { CreateAccesController } from "./controllers/CreateAccesController";
import { ValidateAccesController } from "./controllers/ValidateAccesController";
import { MysqlAccesRepository } from "./mysqlAccesRepository";
import { GetAccesByIdUserController } from "./controllers/GetAccesByIdUserController";
import { GetStationsByUserServiceController } from "./controllers/GetStationsByUserController";
import { MysqlStationRepository } from "../../stations/infrstructure/MysqlStationsRespository";

export const  mysqlAccesRepository = new MysqlAccesRepository ();
export const mysqlStationRepository = new MysqlStationRepository();
export const createAccesUseCase = new CreateAccesUseCase(mysqlAccesRepository);
export const validateAccesUseCase = new ValidateAccesUseCase(mysqlAccesRepository);
export const getAccesByIdUserUseCase = new GetAccesByIdUserUseCase(mysqlAccesRepository,mysqlStationRepository);
export const getStationsByIdUser = new GetStationsByIdUser(mysqlStationRepository,mysqlAccesRepository);
export const createAccesController = new CreateAccesController(createAccesUseCase);
export const validateAccesController = new ValidateAccesController(validateAccesUseCase);
export const getAccesByIdUserController = new GetAccesByIdUserController(getAccesByIdUserUseCase);
export const getStationsByUserServiceController =  new GetStationsByUserServiceController(getStationsByIdUser);