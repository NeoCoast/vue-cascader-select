/* eslint-disable import/prefer-default-export */
/*
  Every option should have a string|number label
  and either a value or an options Array
*/
export const validateOptions = validatingOptions => (
  validatingOptions.every(({ label, options, value }) => (
    label && typeof label === 'string' && (
      value || (options && Array.isArray(options) && validateOptions(options))
    )
  ))
);
