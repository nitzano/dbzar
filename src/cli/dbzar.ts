import process from 'node:process';
import {Command} from 'commander';

const program = new Command();

program.version('0.0.1');

// Anon column
program
	.command('anon-col')
	.description('anonymize a single column in a table')
	.requiredOption('-uri, --connection-uri', 'db connection string')
	.requiredOption('-db, --db-name', 'database name')
	.requiredOption('-table, --table', 'table name')
	.requiredOption('-column, --columnName', 'table name');

program.parse(process.argv);
