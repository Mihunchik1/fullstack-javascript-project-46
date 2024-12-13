const formatJson = (diff) => {
  const jsonObject = (nodes) => nodes.reduce((acc, node) => {
    const {
      type, key, value, oldValue, newValue, children,
    } = node;

    const newEntry = (() => {
      switch (type) {
        case 'added':
          return { [key]: { type, value } };
        case 'removed':
          return { [key]: { type, value } };
        case 'updated':
          return { [key]: { type, oldValue, newValue } };
        case 'nested':
          return { [key]: { type, children: jsonObject(children) } };
        case 'unchanged':
          return { [key]: { type, value } };
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    })();

    return { ...acc, ...newEntry };
  }, {});

  return JSON.stringify(jsonObject(diff), null, 2);
};

export default formatJson;
