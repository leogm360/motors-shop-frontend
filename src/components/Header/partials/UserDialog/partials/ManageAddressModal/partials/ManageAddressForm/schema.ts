import * as Yup from "yup";
import {
  REQUIRED_FIELD,
  NUMBER_FIELD,
  POSITIVE_NUMBER_FIELD,
  INTEGER_FIELD,
  MAX_NUMBER_FIELD,
} from "@utils";
import { TManageAddressFormData } from "./ManageAddressFormTypes";

const MAX_NUMBER = 999999;

export const addressSchema: Yup.SchemaOf<TManageAddressFormData> =
  Yup.object().shape({
    cep: Yup.string().required(REQUIRED_FIELD),
    city: Yup.string().required(REQUIRED_FIELD),
    state: Yup.string().required(REQUIRED_FIELD),
    road: Yup.string().required(REQUIRED_FIELD),
    number: Yup.number()
      .required(REQUIRED_FIELD)
      .typeError(NUMBER_FIELD)
      .integer(INTEGER_FIELD)
      .positive(POSITIVE_NUMBER_FIELD)
      .max(MAX_NUMBER, MAX_NUMBER_FIELD(MAX_NUMBER)),
    complement: Yup.string().optional(),
  });
