import { Router } from "express";

import { RealtyContoller } from "@modules/realty/controllers/RealtyController";
import userAuth from "@shared/infra/http/middlewares/userAuth";

const realtyRoutes = Router();

const realtyController = new RealtyContoller();

realtyRoutes.use(userAuth);

realtyRoutes.post("/", realtyController.create);

realtyRoutes.put("/update/:id", realtyController.update);

realtyRoutes.get("/find/:id", realtyController.findById);

realtyRoutes.get("/list", realtyController.list);

realtyRoutes.delete("/delete/:id", realtyController.delete);

export { realtyRoutes };
