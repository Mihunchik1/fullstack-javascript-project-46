const formatPlain = (diff, diffEngine, path = []) => {
  const getFormatValue = (value) => {
    if (typeof value === 'object' && value !== null) {
      return '[complex value]';
    }
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    return value;
  };

  const lines = diff.flatMap((node) => {
    const {
      type, key, value, oldValue, newValue, children,
    } = node;
    const propertyPath = [...path, key].join('.');

    switch (type) {
      case 'added':
        return `Property '${propertyPath}' was added with value: ${getFormatValue(value)}`;
      case 'removed':
        return `Property '${propertyPath}' was removed`;
      case 'updated':
        return `Property '${propertyPath}' was updated. From ${getFormatValue(oldValue)} to ${getFormatValue(newValue)}`;
      case 'nested':
        return formatPlain(children, diffEngine, [...path, key]);
      case 'unchanged':
        return [];
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return lines.join('\n');
};

export default formatPlain;
