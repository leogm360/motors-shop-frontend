import { EUserRoles } from "../../utils";

export type TAddressData = {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement?: string;
};

export type TRegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  cpf: string;
  cellphone: string;
  birthdate: string;
  description: string;
  accountType: EUserRoles;
  address: TAddressData;
};
