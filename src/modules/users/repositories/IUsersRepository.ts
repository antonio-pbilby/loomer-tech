import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entitites/User";

export interface IUsersRepository {
  insert(data: ICreateUserDTO): Promise<User>;
  findByCpf(cpf: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
