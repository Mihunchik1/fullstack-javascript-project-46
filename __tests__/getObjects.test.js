import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import getObj from '../src/modules/getObjects.js';

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

test('get objects', () => {
  const file1 = path.join(__dirname, '__fixtures__', 'file1.yml');
  const file2 = path.join(__dirname, '__fixtures__', 'file2.yml');
  const obj1 = {
    common: {
        setting1: 'Value 1',
        setting2: 200,
        setting3: true,
        setting6: {
            key: 'value',
            doge: {
                wow: ''
            }
        }
    },
    group1: {
        baz: 'bas',
        foo: 'bar',
        nest: {
            key: 'value'
        }
    },
    group2: {
        abc: 12345,
        deep: {
            id: 45
        }
    }
};
const obj2 = {
    common: {
        follow: false,
        setting1: 'Value 1',
        setting3: null,
        setting4: 'blah blah',
        setting5: {
            key5: 'value5'
        },
        setting6: {
            key: 'value',
            ops: 'vops',
            doge: {
                wow: 'so much'
            }
        }
    },
    group1: {
        foo: 'bar',
        baz: 'bars',
        nest: 'str'
    },
    group3: {
        deep: {
            id: {
                number: 45
            }
        },
        fee: 100500
    }
};
  expect(getObj([[file1, '.yml'], [file2, '.yml']])).toEqual([obj1, obj2]);
});

