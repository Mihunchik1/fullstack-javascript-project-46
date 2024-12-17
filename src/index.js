import getObj from './modules/getObjects.js';
import getDiff from './modules/getDifferent.js';

export default (filepath1, filepath2, format = 'stylish') => {
  const objects = getObj(filepath1, filepath2);
  const diff = getDiff(objects, format);
  return diff;
};
