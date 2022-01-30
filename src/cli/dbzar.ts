import process from 'node:process';
import {Command} from 'commander';

const program = new Command();

program.version('0.0.1');

// Anon column
program
	.command('anon-col')
	.description('anonymize a single column in a table')
	.option('-uri, --connection-uri', 'db connection string')
	.option('-db, --db-name', 'database name');

program.parse(process.argv);
