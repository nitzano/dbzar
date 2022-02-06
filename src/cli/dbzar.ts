#!/usr/bin/env node

import process from 'node:process';
import {Command} from 'commander';
import {anonColCommand} from './commands/anon-col/anon-col';

const program = new Command();

// Anon column
program.addCommand(anonColCommand);

program.parse(process.argv);
