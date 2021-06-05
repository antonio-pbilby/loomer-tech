import { getRepository, Repository } from "typeorm";

import { ICreateRealtyDTO } from "@modules/realty/dtos/ICreateRealtyDTO";
import { IUpdateRealtyDTO } from "@modules/realty/dtos/IUpdateRealtyDTO";
import { Realty } from "@modules/realty/entities/Realty";

import { IRealtiesRepository } from "../IRealtiesRepository";

export class RealtiesRepository implements IRealtiesRepository {
  private repository: Repository<Realty>;

  constructor() {
    this.repository = getRepository(Realty);
  }

  async create(data: ICreateRealtyDTO): Promise<Realty> {
    const realty = this.repository.create(data);

    return this.repository.save(realty);
  }

  async update(realty: IUpdateRealtyDTO): Promise<Realty> {
    return this.repository.save(realty);
  }

  async list(): Promise<Realty[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Realty> {
    return this.repository.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
