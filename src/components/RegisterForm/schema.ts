import * as Yup from "yup";
import { TransformFunction } from "yup/lib/types";
import {
  EUserRoles,
  CONFIRM_FIELD,
  REQUIRED_FIELD,
  EMAIL_FIELD,
  INTEGER_FIELD,
  STRONG_PASSWORD,
  PASSWORD_FIELD,
  NOT_ALNUM,
} from "../../utils";
import { TRegisterFormData, TAddressData } from "./RegisterFormTypes";

const sanitizeInputs = (value: string) => {
  const sanitizedInput = value.replace(NOT_ALNUM, "");

  return sanitizedInput;
};

export const addressSchema: Yup.SchemaOf<TAddressData> = Yup.object().shape({
  cep: Yup.string().required(REQUIRED_FIELD).transform(sanitizeInputs),
  street: Yup.string().required(REQUIRED_FIELD),
  number: Yup.number().required(REQUIRED_FIELD).typeError(INTEGER_FIELD),
  complement: Yup.string().optional(),
  city: Yup.string().required(REQUIRED_FIELD),
  state: Yup.string().required(REQUIRED_FIELD),
});

export const registerSchema: Yup.SchemaOf<TRegisterFormData> =
  Yup.object().shape({
    name: Yup.string().required(REQUIRED_FIELD),
    email: Yup.string().required(REQUIRED_FIELD).email(EMAIL_FIELD),
    cpf: Yup.string().required(REQUIRED_FIELD).transform(sanitizeInputs),
    cellphone: Yup.string().required(REQUIRED_FIELD).transform(sanitizeInputs),
    birthdate: Yup.string().required(REQUIRED_FIELD),
    description: Yup.string().required(REQUIRED_FIELD),
    address: addressSchema,
    accountType: Yup.mixed<EUserRoles>()
      .oneOf(Object.values(EUserRoles))
      .required(REQUIRED_FIELD),
    password: Yup.string()
      .required(REQUIRED_FIELD)
      .matches(STRONG_PASSWORD, PASSWORD_FIELD),
    confirmPassword: Yup.string()
      .required(REQUIRED_FIELD)
      .oneOf([Yup.ref("password")], CONFIRM_FIELD("senha")),
  });
