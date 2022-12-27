export type TManageAddressFormData = {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: number;
  complement: string | undefined;
};

export interface IManageAddressFormProps
  extends Pick<IModalGenericProps, "setIsOpen"> {}
