import * as fs from 'fs';
import yaml from 'js-yaml';

export default (data, ext) => {
  const extensions = {
    json: () => JSON.parse(fs.readFileSync(data, 'utf-8')),
    yml: () => {
      const doc = yaml.load(fs.readFileSync(data, 'utf8'));
      return JSON.parse(JSON.stringify(doc));
    },
    ymal: () => {
      const doc = yaml.load(fs.readFileSync(data, 'utf8'));
      return JSON.parse(JSON.stringify(doc));
    },
  };

  return extensions[ext]();
};
