import { jest, test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import parser from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('generate different', () => {
  const file1 = path.join(__dirname, '__fixtures__', 'file1.json');
  const file2 = path.join(__dirname, '__fixtures__', 'file2.json');
  const expectedResult = `{
  "common": {
    "type": "nested",
    "children": {
      "follow": {
        "type": "added",
        "value": false
      },
      "setting1": {
        "type": "unchanged",
        "value": "Value 1"
      },
      "setting2": {
        "type": "removed",
        "value": 200
      },
      "setting3": {
        "type": "updated",
        "oldValue": true,
        "newValue": null
      },
      "setting4": {
        "type": "added",
        "value": "blah blah"
      },
      "setting5": {
        "type": "added",
        "value": {
          "key5": "value5"
        }
      },
      "setting6": {
        "type": "nested",
        "children": {
          "doge": {
            "type": "nested",
            "children": {
              "wow": {
                "type": "updated",
                "oldValue": "",
                "newValue": "so much"
              }
            }
          },
          "key": {
            "type": "unchanged",
            "value": "value"
          },
          "ops": {
            "type": "added",
            "value": "vops"
          }
        }
      }
    }
  },
  "group1": {
    "type": "nested",
    "children": {
      "baz": {
        "type": "updated",
        "oldValue": "bas",
        "newValue": "bars"
      },
      "foo": {
        "type": "unchanged",
        "value": "bar"
      },
      "nest": {
        "type": "updated",
        "oldValue": {
          "key": "value"
        },
        "newValue": "str"
      }
    }
  },
  "group2": {
    "type": "removed",
    "value": {
      "abc": 12345,
      "deep": {
        "id": 45
      }
    }
  },
  "group3": {
    "type": "added",
    "value": {
      "deep": {
        "id": {
          "number": 45
        }
      },
      "fee": 100500
    }
  }
}`;

  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

  parser(file1, file2, 'json');

  expect(consoleLogSpy).toHaveBeenCalled();

  const [resultFunc] = consoleLogSpy.mock.calls[0];
  expect(resultFunc).toEqual(expectedResult);
  consoleLogSpy.mockRestore();
});
