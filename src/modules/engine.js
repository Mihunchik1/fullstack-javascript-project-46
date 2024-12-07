export default (obj1, obj2) => {
  const iter = (firstObj, secondObj) => {
    const keys = [...new Set([...Object.keys(firstObj), ...Object.keys(secondObj)])].sort();
    return keys.map((key) => {
      if (!firstObj.hasOwnProperty(key)) {
        return { type: 'added', key, value: secondObj[key] };
      }
      if (!secondObj.hasOwnProperty(key)) {
        return { type: 'removed', key, value: firstObj[key] };
      }
      if (typeof firstObj[key] === 'object' && typeof secondObj[key] === 'object' && firstObj[key] !== null && secondObj[key] !== null) {
        return { type: 'nested', key, children: iter(firstObj[key], secondObj[key]) };
      }
      if (firstObj[key] !== secondObj[key]) {
        return {
          type: 'updated', key, oldValue: firstObj[key], newValue: secondObj[key],
        };
      }
      return { type: 'unchanged', key, value: firstObj[key] };
    });
  };

  return iter(obj1, obj2);
};
