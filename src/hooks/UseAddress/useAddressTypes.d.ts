export type TAddress = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export type TAddressError = {
  erro: true;
};

export type TAddressResponse = TAddress | TAddressError;
