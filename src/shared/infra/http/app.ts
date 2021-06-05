import express from "express";
import "express-async-errors";
import "reflect-metadata";

import "@shared/container";
import { router } from "@shared/infra/http/routes";
import createConnection from "@shared/infra/typeorm";

import errorHandler from "./middlewares/errorHandler";

createConnection();
const app = express();

app.use(express.json());

app.use(router);
app.use(errorHandler);

export { app };
