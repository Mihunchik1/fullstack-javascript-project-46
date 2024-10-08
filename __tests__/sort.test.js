import { test, expect } from '@jest/globals';
import sorter from '../src/modules/sort.js';

test('sort objects keys', () => {
  const arr = [
    '    host: hexlet.io',
    '  - timeout: 50',
    '  + timeout: 20',
    '  - proxy: 123.234.53.22',
    '  - follow: false',
    '  + verbose: true',
  ];
  const result = [
    '  - follow: false',
    '    host: hexlet.io',
    '  - proxy: 123.234.53.22',
    '  - timeout: 50',
    '  + timeout: 20',
    '  + verbose: true',
  ];
  expect(sorter(arr)).toEqual(result);
});
