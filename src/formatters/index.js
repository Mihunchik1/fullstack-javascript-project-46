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
    throw new Error('unknown format');
  }
  return formatters[format];
};
