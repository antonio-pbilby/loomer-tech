import { Router } from "express";

import { realtyRoutes } from "./realty.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/realties", realtyRoutes);

export { router };
