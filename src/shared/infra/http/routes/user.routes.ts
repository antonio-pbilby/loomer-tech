import { Router } from "express";

import { UserController } from "@modules/users/controllers/UserController";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", userController.create);
userRoutes.post("/login", userController.authenticate);

export { userRoutes };
