#!/usr/bin/env node
import compare from '../src/index.js';
import { Command } from 'commander';

const program = new Command();

program.description('Compares two configuration files and shows a difference.')
    .option('-V,--version', 'output the version number')
    .option('-f,--format <type>', 'output format')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .action((filepath1, filepath2) => compare(filepath1, filepath2));

program.parse();