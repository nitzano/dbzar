import {Command} from 'commander';
import {anonColAction} from './anon-col-action';

export const anonColCommand = new Command('anon-col');

anonColCommand
	.argument('<uri>', 'connection string')
	.argument('<db>', 'database name')
	.argument('<table>', 'table name')
	.argument('<column>', 'column name')
	.option('-p --provider <provider>', 'provider to be used for column', 'mask')
	.option('-skip --skip-confirm', 'skip confirmation')
	.description('anonymize a single column in a table')
	.action(anonColAction);
