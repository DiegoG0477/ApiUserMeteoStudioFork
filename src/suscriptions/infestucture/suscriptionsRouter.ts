import express from "express";

export const suscriptionsRouter = express.Router();

import { createSuscriptionController } from "./dependencies";

suscriptionsRouter.get(
    "/",

)

suscriptionsRouter.get(
    "/:id_suscription",
    
)

suscriptionsRouter.get(
    "/:id_user",
)

suscriptionsRouter.post(
    "/",
    createSuscriptionController.run.bind(createSuscriptionController)
)

suscriptionsRouter.put(
    "/:id_suscription",

)



