import sorter from './sort.js';

export default (arr) => {

  const [obj1, obj2] = arr; 
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  const result1 = obj1Keys.map((key) => {
    if(obj2.hasOwnProperty(key)) {
      if (obj1[key] === obj2[key]) {
        return `    ${key}: ${obj1[key]}`;
      }
      else {
        const firstObj = `  - ${key}: ${obj1[key]}`;
        const secondObj = `  + ${key}: ${obj2[key]}`;
        const objArr = [firstObj, secondObj];
        return [...objArr];
      }
    }
    else {
      return `  - ${key}: ${obj1[key]}`;
    }
  });

  const result2 = obj2Keys.map((key) => {
    if (!obj1.hasOwnProperty(key)) {
      return `  + ${key}: ${obj2[key]}`;
    }
  }).filter((item) => item != undefined);

  const result = [...result1, ...result2];
  const newResult = result.flat();

  const resultSort = sorter(newResult);

  return `{\n${resultSort.join('\n')}\n}`;
}