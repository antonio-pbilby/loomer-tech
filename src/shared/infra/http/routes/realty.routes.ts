import { Router } from "express";

import { RealtyContoller } from "@modules/realty/controllers/RealtyController";

const realtyRoutes = Router();

const realtyController = new RealtyContoller();

realtyRoutes.post("/", realtyController.create);

realtyRoutes.put("/update/:id", realtyController.update);

realtyRoutes.get("/find/:id", realtyController.findById);

realtyRoutes.get("/list", realtyController.list);

export { realtyRoutes };
