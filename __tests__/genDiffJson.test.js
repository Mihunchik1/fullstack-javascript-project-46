import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import parser from '../src/index.js';
import expectedResult from './__fixtures__/expectedResult.fixture.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('generate different', () => {
  const file1 = path.join(__dirname, '__fixtures__', 'file1.json');
  const file2 = path.join(__dirname, '__fixtures__', 'file2.json');
  

  const result = parser(file1, file2, 'json');

  expect(result).toEqual(expectedResult);
});
