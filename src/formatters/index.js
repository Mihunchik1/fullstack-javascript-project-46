import formatStylish from './stylish.js';

export default (format) => {
  const formatters = {
    stylish: formatStylish,
  };
  return formatters[format];
};
