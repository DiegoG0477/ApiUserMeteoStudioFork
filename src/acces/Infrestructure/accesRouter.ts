import express from "express";
import { createAccesController } from "./dependencies";


export const accesRouter = express.Router();


accesRouter.post(
    "/",
    createAccesController.run.bind(createAccesController)
)



































