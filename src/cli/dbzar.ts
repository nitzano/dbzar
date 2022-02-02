#!/usr/bin/env node

import process from 'node:process';
import {Command} from 'commander';
import {prompt} from 'enquirer';
import {anonymizeColumn} from './commands/anon-column';

const program = new Command();

async function runAction(
	uri: string,
	db: string,
	table: string,
	column: string,
	options: any,
) {
	try {
		const answer = await prompt<{run: boolean}>({
			skip: options.skipConfirm === true,
			type: 'confirm',
			name: 'run',
			message: `Are you sure you want to anonymize column "${column}" in "${db}/${table}" `,
			initial: 'true',
		});
		if (!answer.run) {
			return;
		}
	} catch (error: unknown) {
		console.error(error);
		throw new Error('could not receive answer');
	}

	await anonymizeColumn(uri, table, column, options.provider, db);
}

// Anon column
program
	.command('anon-col')
	.argument('<uri>', 'connection string')
	.argument('<db>', 'database name')
	.argument('<table>', 'table name')
	.argument('<column>', 'column name')
	.option('-p --provider <provider>', 'provider to be used for column', 'mask')
	.option('-skip --skip-confirm', 'skip confirmation')
	.description('anonymize a single column in a table')
	.action(runAction);

program.parse(process.argv);
