import express from "express";
import { Signale } from "signale";
import cors from "cors";
// import { userRouter } from "./product/infrastructure/UserRouter";

const app = express();

const signale = new Signale();
app.disable("x-powered-by");
app.use(cors());

app.use(express.json());
// app.use("/user", userRouter);

app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
