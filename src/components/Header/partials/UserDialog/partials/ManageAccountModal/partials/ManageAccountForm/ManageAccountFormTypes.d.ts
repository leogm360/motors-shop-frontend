export type TManageAccountFormData = {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  birthdate: string;
  description: string;
};

export interface IManageAccountFormProps
  extends Pick<IModalGenericProps, "setIsOpen"> {}
