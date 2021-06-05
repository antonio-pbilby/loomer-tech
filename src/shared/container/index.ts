import { container } from "tsyringe";

import { IRealtiesRepository } from "@modules/realty/repositories/IRealtiesRepository";
import { RealtiesRepository } from "@modules/realty/repositories/typeorm/RealtiesRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { UsersRepository } from "@modules/users/repositories/typeorm/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IRealtiesRepository>(
  "RealtiesRepository",
  RealtiesRepository
);
