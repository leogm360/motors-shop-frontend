/**
 * Regex that checks if a user passoword is strong enougth to be used.
 * A password is considered strong if it contains at least a lower case and
 * uppercase letters, some special character (e.g. !, @, #, $, %, &, * and .)
 * and should be eight characters long at least (it has no cap on the length).
 */
export const STRONG_PASSWORD =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*\.])[0-9a-zA-Z!@#$%&*\.]{8,}$/;

/**
 * Regex that matches whenever a string contain not alpha numeric characters.
 * This includes formating chracters (e.g. \n and \t), special characters
 * (e.g. ! and @) and others.
 */
export const NOT_ALNUM = /\W/g;

/**
 * Regex that matches a url directing to a image on web.
 */
export const IMAGE_URL = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|svg|webp))/i;
