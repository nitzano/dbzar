#!/usr/bin/env node

import process from 'node:process';
import {Command} from 'commander';
import {anonColCommand} from './commands/anon-col/anon-col';
import {anonDbCommand} from './commands/anon-db/anon-db-command';

const program = new Command();

// Anon column
program.addCommand(anonColCommand);

if (process.env.NODE_ENV === 'development') {
	program.addCommand(anonDbCommand);
}

program.parse(process.argv);
