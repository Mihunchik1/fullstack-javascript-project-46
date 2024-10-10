import { test, expect } from '@jest/globals';
import getExtension from '../src/modules/getExtension.js';

test('true extension1', () => {
  expect(getExtension('file1.yml', 'file2.json')).toEqual([['file1.yml', '.yml'], ['file2.json', '.json']]);
  expect(getExtension('file1.json', 'file2.json')).toEqual([['file1.json', '.json'], ['file2.json', '.json']]);
});
