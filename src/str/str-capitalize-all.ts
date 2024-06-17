import { strCapitalize } from './str-capitalize.js';

/**
 * @description
 * Converts strings of first character to uppercase
 *
 * @example
 * ``` ts
 * strCapitalizeAll('Standard tax united states');
 * // => Standard Tax United States
 * strCapitalizeAll('Standard  tax    united  states');
 * // => Standard Tax United States
 * ```
 *
 * @param str The string to be converted
 *
 * @docsCategory preference/utils/string
 * @codeFilter str-capitalize-all
 */
export const strCapitalizeAll = (str: string) => {
  str = str || '';
  const newStrs = str.split(/\s+/).map((s) => strCapitalize(s));
  return newStrs.join(' ');
};
