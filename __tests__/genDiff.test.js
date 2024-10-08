import { jest, test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import parser from '../src/parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('generate different', () => {
  const file1 = path.join(__dirname, '__fixtures__', 'file1.json');
  const file2 = path.join(__dirname, '__fixtures__', 'file2.json');
  const expectedResult = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

  parser(file1, file2);

  expect(consoleLogSpy).toHaveBeenCalled();

  const [resultFunc] = consoleLogSpy.mock.calls[0];
  expect(resultFunc).toEqual(expectedResult);
  consoleLogSpy.mockRestore();
});
