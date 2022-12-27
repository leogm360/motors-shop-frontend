export const REQUIRED_FIELD = "Campo obrigatório";

export const EMAIL_FIELD = "Email inválido";

export const NUMBER_FIELD = "Dever ser um número";

export const INTEGER_FIELD = "Dever ser um número inteiro";

export const POSITIVE_NUMBER_FIELD = "Dever ser positivo";

export const PASSWORD_FIELD =
  "Deve conter letras, números e caracteres especiais";

export const IMAGE_URL_FIELD = "Deve ser uma url para uma imagem";

export const MIN_NUMBER_FIELD = (value: Number) => `Mínimo de ${value}`;

export const MAX_NUMBER_FIELD = (value: Number) => `Máximo de ${value}`;

export const MIN_TEXT_FIELD = (value: Number) =>
  `Mínimo de ${value} caracteres`;

export const CONFIRM_FIELD = (field: string) =>
  `Os campos de ${field} não coincidem`;
