#!/usr/bin/env node

import process from 'node:process';
import {Command} from 'commander';
import {anonColCommand} from './commands/anon-col/anon-col.command';
import {anonDbCommand} from './commands/anon-db/anon-db.command';
import {anonFileCommand} from './commands/anon-file/anon-file.command';

const program = new Command();

program.addCommand(anonColCommand);
program.addCommand(anonDbCommand);
program.addCommand(anonFileCommand);

program.parse(process.argv);
