import axios, { AxiosError } from "axios";
import { NOT_ALNUM } from "@utils";
import { TAddressResponse } from "./useAddressTypes";

export const useAddress = () => {
  const getAddress = async (cep: string) => {
    const sanitizedCep = cep.replace(NOT_ALNUM, "");

    const res = await axios.get<TAddressResponse>(
      `https://viacep.com.br/ws/${sanitizedCep}/json/`
    );

    if ("erro" in res.data) {
      throw new AxiosError("CEP não encontrado");
    }

    return res.data;
  };

  return {
    getAddress,
  };
};
