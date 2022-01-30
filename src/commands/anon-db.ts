import process from 'node:process';
import {Command} from 'commander';

const program = new Command();

program
	.version('0.0.1')
	.option('-uri, --connection-uri', 'db connection string')
	.option('-db, --db-name', 'database name');

program.parse(process.argv);
