import getObj from './modules/getObjects.js';
import getDiff from './modules/getDifferent.js';
import getExtension from './modules/getExtension.js';

export default (filepath1, filepath2, format) => {
  const getExtensionAndObjects = getExtension(filepath1, filepath2);
  const objects = getObj(getExtensionAndObjects);
  const diff = getDiff(objects, format);
  return diff;
};
