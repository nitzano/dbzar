import {Command} from 'commander';
import {maskCommand} from '../commands/mask/command';

export const anonColCommand = new Command('anon-col');

anonColCommand
	.description('anonymize a single column in a table')
	.argument('<uri>', 'connection string')
	.argument('<db>', 'database name')
	.argument('<table>', 'table name')
	.argument('<column>', 'column name')
	.addCommand(maskCommand, {isDefault: true})
	.option('-C --no-confirm', 'Do not wait for user confirmation');
