import path from 'path';
import parser from './parser.js';

export default (path1, path2) => {
  const file1Extension1 = path.extname(path1).slice(1);
  const file1Extension2 = path.extname(path2).slice(1);

  const obj1 = parser(path1, file1Extension1);
  const obj2 = parser(path2, file1Extension2);
  return [obj1, obj2];
};
