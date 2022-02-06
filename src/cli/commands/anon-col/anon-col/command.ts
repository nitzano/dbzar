import {Command, Option} from 'commander';
import {providers} from '../../../../types/types';
import {maskCommand} from '../commands/mask/mask-command';

export const anonColCommand = new Command('anon-col');

anonColCommand
	.description('anonymize a single column in a table')
	.argument('<uri>', 'connection string')
	.argument('<db>', 'database name')
	.argument('<table>', 'table name')
	.argument('<column>', 'column name')
	.addCommand(maskCommand, {isDefault: true})
	.addOption(
		new Option('-p --provider <provider>', 'provider to be used for column')
			.default('mask')
			.choices(providers),
	)
	.option('-skip --no-confirm', 'Do not wait for user confirmation');
// .action(anonColAction);
