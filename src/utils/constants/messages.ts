export const REQUIRED_FIELD = "Campo obrigatório";

export const EMAIL_FIELD = "Email inválido";

export const INTEGER_FIELD = "Dever ser um número inteiro";

export const PASSWORD_FIELD =
  "Deve conter letras, números e caracteres especiais";

export const CONFIRM_FIELD = (field: string) =>
  `Os campos de ${field} não coincidem`;
