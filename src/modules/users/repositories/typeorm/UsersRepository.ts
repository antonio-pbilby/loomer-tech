import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { User } from "@modules/users/entitites/User";

import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ email });
  }

  async insert(data: ICreateUserDTO): Promise<User> {
    const user = this.repository.create(data);

    return this.repository.save(user);
  }

  async findByCpf(cpf: string): Promise<User> {
    return this.repository.findOne({ cpf });
  }
}
