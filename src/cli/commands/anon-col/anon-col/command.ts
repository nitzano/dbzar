import {Command} from 'commander';
import {maskCommand} from '../commands/mask/mask-command';

export const anonColCommand = new Command('anon-col');

anonColCommand
	.description('anonymize a single column in a table')
	.addCommand(maskCommand, {isDefault: true})
	.option('-C --no-confirm', 'Do not wait for user confirmation');
