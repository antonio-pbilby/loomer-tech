import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "@modules/users/repositories/typeorm/UsersRepository";
import { AppError } from "@shared/errors/AppError";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError("token-missing", 401);

  const usersRepository = new UsersRepository();

  const [, token] = authHeader.split(" ");

  const secretKey = process.env.SECRET_KEY_JWT;

  try {
    const { sub: user_id } = verify(token, secretKey) as { sub: string };

    const user = await usersRepository.findById(user_id);

    if (!user) throw new AppError("user-does-not-exist", 401);

    req.user = {
      id: user.id,
    };

    next();
  } catch (err) {
    throw new AppError("invalid-token", 401);
  }
};
