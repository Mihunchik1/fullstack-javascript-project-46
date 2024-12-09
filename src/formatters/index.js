import formatStylish from './stylish.js';
import formatPlain from './plain.js';

export default (format) => {
  const formatters = {
    stylish: formatStylish,
    plain: formatPlain,
  };
  return formatters[format];
};
