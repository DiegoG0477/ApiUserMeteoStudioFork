import express from "express";
import { Signale } from "signale";
import dotenv from 'dotenv';
import cors from "cors";
// import { userRouter } from "./product/infrastructure/UserRouter";
dotenv.config()

import { userRouter } from "./user/infrestucture/UserRouter";
const app = express();
const corsOptions: cors.CorsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
};
app.use(cors(corsOptions));

const signale = new Signale();
const SERVER_PORT = process.env.SERVER_PORT || 3001;
app.disable("x-powered-by");

app.use(express.json());
app.use("/user", userRouter);

app.listen(3001, () => {
  signale.success("Server online in port 3001");
});
