export interface IUpdateRealtyDTO {
  id: string;
  cep?: string;
  number?: string;
  complement?: string;
  rent_value?: number;
  commodious?: number;
  available?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
