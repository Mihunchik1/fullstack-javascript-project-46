import * as fs from 'fs';

export default (file1, file2) => {
  const object1 = JSON.parse(fs.readFileSync(file1, 'utf-8'));
  const object2 = JSON.parse(fs.readFileSync(file2, 'utf-8'));
  return [object1, object2];
}