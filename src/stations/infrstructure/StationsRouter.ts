import express from "express";

export const stationsRouter = express.Router();
import { createStationController, getAllStationsController, getStationByIdController, getStationByIdUserController, updateStationsController} from "./dependencies";

stationsRouter.get(
    "/",
    getAllStationsController.run.bind(getAllStationsController)
)
stationsRouter.get(
    "/:id_station",
    getStationByIdController.run.bind(getStationByIdController)
)
stationsRouter.get(
    "/users/:owner_id",
    getStationByIdUserController.run.bind(getStationByIdUserController)
)
stationsRouter.post(
    "/",
    createStationController.run.bind(createStationController)
)
stationsRouter.put(
    "/",
    updateStationsController.run.bind(updateStationsController)
)

stationsRouter.delete(
    "/:id_station"
)