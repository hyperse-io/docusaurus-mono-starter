/**
 * @description
 * Convert string to camel case format
 *
 * @example
 * ``` ts
 * strCamelCase('--foo-bar--');
 * // => fooBar
 * strCamelCase('__FOO_ BAR__');
 * // => fooBar
 * strCamelCase('__FOO_- BAR__');
 * // => fooBar
 * ```
 *
 * @param str The string to be converted
 *
 * @docsCategory preference/utils/string
 * @codeFilter str-camel-case
 */
export declare const strCamelCase: (str: string) => string;
