import getObj from './modules/getObjects.js';
import getDiff from './modules/getDifferent.js';

export default (filepath1, filepath2) => {
  const objects = getObj(filepath1, filepath2);
  const diff = getDiff(objects);
  console.log(diff);
};
