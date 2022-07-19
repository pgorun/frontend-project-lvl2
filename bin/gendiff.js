#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();

program.description('Compares two configuration files and shows a difference.')
    .option('-V,--version', 'output the version number')
    .option('-f,--format <type>', 'output format')
    .argument('<filepath1>')
    .argument('<filepath2>');

program.parse();