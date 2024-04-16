import { MysqlStationRepository } from "./MysqlStationsRespository";

import { CreateStationUseCase } from "../aplication/CreateStationUseCase";
import { GetAllStationsUseCase } from "../aplication/GetAllStationsUseCase";
import { GetStationByidUseCase } from "../aplication/GetStationByIdUseCase";
import { GetStationByIdUserUseCase } from "../aplication/GetStationByIdUser";
import { UpdateStationUseCase } from "../aplication/UpdateStationsUseCase";

import { CreateStationController } from "./controllers/CreateStationController";
import { GetAllStationsController } from "./controllers/GetAllStationsController";
import { GetStationByIdController } from "./controllers/GetStationByIdController";
import { GetStationByIdUserController } from "./controllers/GetStationByIdUserController";
import { UpdateStationsController } from "./controllers/UpdateStationController";

export const mysqlStationRepository = new MysqlStationRepository();

//use Cases
export const createStationUseCase = new CreateStationUseCase(mysqlStationRepository);
export const getAllStationsUseCase = new GetAllStationsUseCase(mysqlStationRepository);
export const getStationByidUseCase = new GetStationByidUseCase(mysqlStationRepository)
export const getStationByIdUserUseCase = new GetStationByIdUserUseCase(mysqlStationRepository);
export const updateStationUseCase = new UpdateStationUseCase(mysqlStationRepository);

//Controllers
export const createStationController = new CreateStationController(createStationUseCase);
export const getAllStationsController = new GetAllStationsController(getAllStationsUseCase);
export const getStationByIdController = new GetStationByIdController(getStationByidUseCase);
export const getStationByIdUserController = new GetStationByIdUserController(getStationByIdUserUseCase);
export const updateStationsController = new UpdateStationsController(updateStationUseCase);
