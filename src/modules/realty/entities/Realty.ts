import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("realties")
export class Realty {
  @PrimaryColumn()
  id?: string;

  @Column()
  cep: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  rent_value: number;

  @Column()
  commodious: number;

  @Column()
  available?: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
    this.available = true;
  }
}
