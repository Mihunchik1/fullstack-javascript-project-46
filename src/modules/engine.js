/* eslint-disable no-prototype-builtins */
export default (obj1, obj2) => {
  const getSortedKeys = (keys) => {
    if (keys.length <= 1) {
      return keys;
    }

    const pivot = keys[0];
    const lesser = keys.filter((key, index) => index > 0 && key < pivot);
    const greater = keys.filter((key, index) => index > 0 && key >= pivot);

    return [...getSortedKeys(lesser), pivot, ...getSortedKeys(greater)];
  };

  const iter = (firstObj, secondObj) => {
    const keys = [...new Set([...Object.keys(firstObj), ...Object.keys(secondObj)])];
    const sortedKeys = getSortedKeys(keys);

    return sortedKeys.map((key) => {
      if (!Object.prototype.hasOwnProperty.call(firstObj, key)) {
        return { type: 'added', key, value: secondObj[key] };
      }
      if (!Object.prototype.hasOwnProperty.call(secondObj, key)) {
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
