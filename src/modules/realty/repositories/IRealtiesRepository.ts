import { ICreateRealtyDTO } from "../dtos/ICreateRealtyDTO";
import { IUpdateRealtyDTO } from "../dtos/IUpdateRealtyDTO";
import { Realty } from "../entities/Realty";

export interface IRealtiesRepository {
  create(data: ICreateRealtyDTO): Promise<Realty>;
  update(realty: IUpdateRealtyDTO): Promise<Realty>;
  list(): Promise<Realty[]>;
  findById(id: string): Promise<Realty>;
  delete(id: string): Promise<void>;
}
