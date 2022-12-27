import * as Yup from "yup";
import { EMAIL_FIELD, REQUIRED_FIELD } from "@utils";
import { TManageAccountFormData } from "./ManageAccountFormTypes";

export const accountSchema: Yup.SchemaOf<TManageAccountFormData> =
  Yup.object().shape({
    name: Yup.string().required(REQUIRED_FIELD),
    email: Yup.string().required(REQUIRED_FIELD).email(EMAIL_FIELD),
    cpf: Yup.string().required(REQUIRED_FIELD),
    cellphone: Yup.string().required(REQUIRED_FIELD),
    birthdate: Yup.string().required(REQUIRED_FIELD),
    description: Yup.string().required(REQUIRED_FIELD),
  });
