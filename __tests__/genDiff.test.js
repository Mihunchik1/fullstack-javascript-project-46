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
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

  parser(file1, file2, 'stylish');

  expect(consoleLogSpy).toHaveBeenCalled();

  const [resultFunc] = consoleLogSpy.mock.calls[0];
  expect(resultFunc).toEqual(expectedResult);
  consoleLogSpy.mockRestore();
});
