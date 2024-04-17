import express from "express";
import {
  createAccesController,
  validateAccesController,
  getAccesByIdUserController,
  getStationsByUserServiceController
} from "./dependencies";

export const accesRouter = express.Router();

accesRouter.post("/", createAccesController.run.bind(createAccesController));

accesRouter.post(
  "/validate",
  validateAccesController.run.bind(validateAccesController)
);

accesRouter.get(
  "/:user_id",
  getAccesByIdUserController.run.bind(getAccesByIdUserController)
);

accesRouter.get(
  "/stationsByUSer/:user_id",
  getStationsByUserServiceController.run.bind(getStationsByUserServiceController)
)
