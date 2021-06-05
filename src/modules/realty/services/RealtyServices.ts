import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { ICreateRealtyDTO } from "../dtos/ICreateRealtyDTO";
import { IUpdateRealtyDTO } from "../dtos/IUpdateRealtyDTO";
import { Realty } from "../entities/Realty";
import { IRealtiesRepository } from "../repositories/IRealtiesRepository";

@injectable()
export class RealtyServices {
  constructor(
    @inject("RealtiesRepository")
    private realtiesRepository: IRealtiesRepository
  ) {}

  async create(data: ICreateRealtyDTO): Promise<Realty> {
    const realty = await this.realtiesRepository.create(data);

    return realty;
  }

  async list(): Promise<Realty[]> {
    return this.realtiesRepository.list();
  }

  async findById(id: string): Promise<Realty> {
    return this.realtiesRepository.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.realtiesRepository.delete(id);
  }

  async update({
    id,
    cep,
    number,
    complement,
    rent_value,
    commodious,
    available,
  }: IUpdateRealtyDTO): Promise<Realty> {
    const realty = await this.realtiesRepository.findById(id);

    if (!realty) throw new AppError("realty-does-not-exist", 404);

    const realtyToUpdate = {
      ...realty,
      id: realty.id,
      cep,
      number,
      complement,
      rent_value,
      commodious,
      available,
    };

    return this.realtiesRepository.update(realtyToUpdate);
  }
}
