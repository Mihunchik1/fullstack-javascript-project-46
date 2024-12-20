#!/usr/bin/env node

import { program } from 'commander';
import parser from '../src/index.js';

const app = () => {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1', '-V, --version', 'output the version number')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format [type]', 'output format', 'stylish')
    .arguments('<filepath1> <filepath2>')
    .action((filepath1, filepath2) => {
      console.log(parser(filepath1, filepath2, program.opts().format));
    });

  program.parse(process.argv);
};

app();
