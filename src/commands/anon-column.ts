import process from 'node:process';
import {Command} from 'commander';
// Change1
const program = new Command();

program
	.version('0.0.1')
	.option('-uri, --connection-uri', 'db connection string')
	.option('-db, --db-name', 'database name')
	.option('-table, --table-name', 'table name')
	.option('-col, --column', 'column name')
	.option('-p, --provider', 'provider type');

program.parse(process.argv);
