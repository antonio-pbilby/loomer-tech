import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entitites/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
export class UserServices {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async create(data: ICreateUserDTO): Promise<User> {
    const { cpf, password, email, full_name } = data;
    const userAlreadyExists = this.usersRepository.findByCpf(cpf);

    if (userAlreadyExists) throw new Error();

    const passwordHash = await hash(password, 8);

    return this.usersRepository.insert({
      cpf,
      email,
      full_name,
      password: passwordHash,
    });
  }
}
