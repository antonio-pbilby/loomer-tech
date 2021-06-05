import { Request, Response } from "express";
import { container } from "tsyringe";

import { RealtyServices } from "../services/RealtyServices";

export class RealtyContoller {
  async create(req: Request, res: Response): Promise<Response> {
    const { cep, number, complement, rent_value, commodious, available } =
      req.body;

    const realtyServices = container.resolve(RealtyServices);

    const realty = await realtyServices.create({
      cep,
      number,
      complement,
      rent_value,
      commodious,
      available,
    });

    return res.status(201).json(realty);
  }

  async list(req: Request, res: Response): Promise<Response> {
    const realtyServices = container.resolve(RealtyServices);

    const realties = await realtyServices.list();

    return res.json(realties);
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const realtyServices = container.resolve(RealtyServices);

    const { id } = req.params;

    const realty = await realtyServices.findById(id);

    return res.json(realty);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { cep, number, complement, rent_value, commodious, available } =
      req.body;

    const realtyServices = container.resolve(RealtyServices);

    const realty = await realtyServices.update({
      id,
      cep,
      number,
      complement,
      rent_value,
      commodious,
      available,
    });

    return res.json(realty);
  }
}
