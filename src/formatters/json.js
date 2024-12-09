const formatJson = (diff) => {
  const jsonObject = (nodes) => nodes.reduce((acc, node) => {
    const {
      type, key, value, oldValue, newValue, children,
    } = node;
    switch (type) {
      case 'added':
        acc[key] = { type, value };
        break;
      case 'removed':
        acc[key] = { type, value };
        break;
      case 'updated':
        acc[key] = { type, oldValue, newValue };
        break;
      case 'nested':
        acc[key] = { type, children: jsonObject(children) };
        break;
      case 'unchanged':
        acc[key] = { type, value };
        break;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
    return acc;
  }, {});

  return JSON.stringify(jsonObject(diff), null, 2);
};

export default formatJson;
