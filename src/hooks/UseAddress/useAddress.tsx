import { useState } from "react";
import axios, { AxiosError } from "axios";
import { TAddress, TAddressResponse } from "./useAddressTypes";
import { NOT_ALNUM } from "../../utils";

export const useAddress = () => {
  const [address, setAddress] = useState<TAddress>({} as TAddress);

  const getAddress = async (cep: string) => {
    const sanitizedCep = cep.replace(NOT_ALNUM, "");

    const res = await axios.get<TAddressResponse>(
      `https://viacep.com.br/ws/${sanitizedCep}/json/`
    );

    if ("erro" in res.data) {
      throw new AxiosError("CEP não encontrado");
    }

    setAddress(res.data);
  };

  return {
    getAddress,
    address,
  };
};
