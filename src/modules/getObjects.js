import * as fs from 'fs';
import yaml from 'js-yaml';

export default (arr) => { // добавить потом в главный файл сперва получение расширения файлов
  const [arr1, arr2] = arr;
  const getObject1 = (firstArr) => {
    if (firstArr[1] === '.json') {
      return JSON.parse(fs.readFileSync(firstArr[0], 'utf-8'));
    }
    const doc = yaml.load(fs.readFileSync(firstArr[0], 'utf8'));
    return JSON.parse(JSON.stringify(doc));
  };
  const getObject2 = (secondArr) => {
    if (secondArr[1] === '.json') {
      return JSON.parse(fs.readFileSync(secondArr[0], 'utf-8'));
    }
    const doc = yaml.load(fs.readFileSync(secondArr[0], 'utf8'));
    return JSON.parse(JSON.stringify(doc));
  };
  const object1 = getObject1(arr1);
  const object2 = getObject2(arr2);
  return [object1, object2];
};
