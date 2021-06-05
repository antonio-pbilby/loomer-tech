import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserServices } from "../services/User";

export class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    const { full_name, email, cpf, password } = req.body;

    const userServices = container.resolve(UserServices);

    const user = await userServices.create({
      full_name,
      email,
      cpf,
      password,
    });

    return res.status(201).json(user);
  }
}
