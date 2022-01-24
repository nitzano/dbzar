import {Command} from 'commander';
import process from 'node:process';

const program = new Command();

program
	.version('0.0.1')
	.option('-uri, --connection-uri', 'db connection string')
	.option('-db, --db-name', 'database name')
	.option('-table, --table-name', 'table name')
	.option('-col, --column', 'column name');

program.parse(process.argv);
