#!/usr/bin/env node

import process from 'node:process';
import {Command} from 'commander';
import {anonymizeColumn} from './commands/anon-column';

const program = new Command();

// Anon column
program
	.command('anon-col')
	.argument('<uri>', 'connection string')
	.argument('<db>', 'database name')
	.argument('<table>', 'table name')
	.argument('<column>', 'column name')
	.option('-p --provider <provider>', 'provider to be used for column', 'mask')
	.description('anonymize a single column in a table')
	.action(async (uri, db, table, column, options) => {
		await anonymizeColumn(uri, table, column, options.provider, db);
	});

program.parse(process.argv);
