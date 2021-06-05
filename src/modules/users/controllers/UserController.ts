import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserServices } from "../services/UserServices";

export class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    const { full_name, email, cpf, password } = req.body;

    const userServices = container.resolve(UserServices);

    await userServices.create({
      full_name,
      email,
      cpf,
      password,
    });

    return res.status(201).send();
  }

  async authenticate(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const userServices = container.resolve(UserServices);

    const tokenResponse = await userServices.authenticateUser({
      email,
      password,
    });

    return res.json(tokenResponse);
  }
}
