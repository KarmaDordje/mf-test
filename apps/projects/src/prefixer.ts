/**
 *
 * @param  {...string} cls
 *
 * @returns {string}
 */
export const prefixClasses = (...cls: string[]) => {
  /**
   * @type {string[]}
   */
  const result: string[] = [];

  cls.forEach((maybeClass) => {
    if (maybeClass && typeof maybeClass === 'string') {
      maybeClass
        .split(' ')
        .forEach((singleClass) => result.push(`cr-${singleClass}`));
    }
  });

  return result.join(' ');
};
