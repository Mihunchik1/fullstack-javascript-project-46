import formatStylish from './stylish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

export default (format) => {
  const formatters = {
    stylish: formatStylish,
    plain: formatPlain,
    json: formatJson,
  };

  if (!formatters[format]) {
    return formatters.stylish;
  }
  return formatters[format];
};
