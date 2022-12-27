import * as Yup from "yup";
import { REQUIRED_FIELD, EMAIL_FIELD } from "@utils";
import { TLoginFormData } from "./LoginFormTypes";

export const loginSchema: Yup.SchemaOf<TLoginFormData> = Yup.object().shape({
  email: Yup.string().required(REQUIRED_FIELD).email(EMAIL_FIELD),
  password: Yup.string().required(REQUIRED_FIELD),
});
