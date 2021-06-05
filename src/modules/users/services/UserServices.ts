import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IAuthenticateUserDTO } from "../dtos/IAuthenticateUserDTO";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IReturn {
  token: string;
  user: {
    email: string;
    full_name: string;
  };
}

@injectable()
export class UserServices {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async create(data: ICreateUserDTO): Promise<void> {
    const { cpf, password, email, full_name } = data;
    const userAlreadyExists = await this.usersRepository.findByCpf(cpf);

    if (userAlreadyExists) throw new AppError("user-already-exists");

    const passwordHash = await hash(password, 8);

    await this.usersRepository.insert({
      cpf,
      email,
      full_name,
      password: passwordHash,
    });
  }

  async authenticateUser({
    email,
    password,
  }: IAuthenticateUserDTO): Promise<IReturn> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new AppError("email-or-password-is-incorrect");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new AppError("email-or-password-is-incorrect");

    const secretKey = process.env.SECRET_KEY_JWT;
    const expiresIn = "1d";
    const token = sign({}, secretKey, {
      subject: user.id,
      expiresIn,
    });

    const tokenReturn = {
      token,
      user: {
        email: user.email,
        full_name: user.full_name,
      },
    };

    return tokenReturn;
  }
}
