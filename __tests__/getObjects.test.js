import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import getObj from '../src/modules/getObjects.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('get objects', () => {
  const file1 = path.join(__dirname, '__fixtures__', 'file1.json');
  const file2 = path.join(__dirname, '__fixtures__', 'file2.json');
  const obj1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  const obj2 = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };
  expect(getObj(file1, file2)).toEqual([obj1, obj2]);
});
