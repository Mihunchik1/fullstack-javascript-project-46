import diffEngine from './engine.js';
import chooseTheFormatter from '../formatters/index.js';

export default (arr, format) => {
  const [object1, object2] = arr;

  const differences = diffEngine(object1, object2);
  const formater = chooseTheFormatter(format);
  const result = formater(differences, diffEngine);
  return result;
};
