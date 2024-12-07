const formatStylish = (diff, diffEngine, depth = 1) => {
  const indentSize = 4;
  const currentIndent = ' '.repeat(depth * indentSize - 2);
  const bracketIndent = ' '.repeat((depth - 1) * indentSize);// добавить аскинему

  // eslint-disable-next-line no-shadow
  const formatValue = (value, depth) => {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const entries = Object.entries(value).map(([key, val]) => `${' '.repeat((depth + 1) * indentSize)}${key}: ${formatValue(val, depth + 1)}`);
      return `{\n${entries.join('\n')}\n${' '.repeat(depth * indentSize)}}`;
    }
    return value;
  };

  const lines = diff.map((node) => {
    const {
      type, key, value, oldValue, newValue, children,
    } = node;
    switch (type) {
      case 'added':
        return `${currentIndent}+ ${key}: ${formatValue(value, depth)}`;
      case 'removed':
        return `${currentIndent}- ${key}: ${formatValue(value, depth)}`;
      case 'updated':
        return `${currentIndent}- ${key}: ${formatValue(oldValue, depth)}\n${currentIndent}+ ${key}: ${formatValue(newValue, depth)}`;
      case 'nested':
        return `${currentIndent}  ${key}: ${formatStylish(children, diffEngine, depth + 1)}`;
      case 'unchanged':
        return `${currentIndent}  ${key}: ${formatValue(value, depth)}`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return `{\n${lines.join('\n')}\n${bracketIndent}}`;
};

export default formatStylish;
