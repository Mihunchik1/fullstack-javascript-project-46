import { jest, test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import parser from '../src/parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('generate different', () => {
  const file1 = path.join(__dirname, '__fixtures__', 'file1.json');
  const file2 = path.join(__dirname, '__fixtures__', 'file2.json');
  const expectedResult = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;

  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

  parser(file1, file2, 'plain');

  expect(consoleLogSpy).toHaveBeenCalled();

  const [resultFunc] = consoleLogSpy.mock.calls[0];
  expect(resultFunc).toEqual(expectedResult);
  consoleLogSpy.mockRestore();
});
