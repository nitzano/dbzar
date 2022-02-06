import {Command} from 'commander';
import {maskCommand} from './commands/mask/mask-command';
import {scrambleCommand} from './commands/scramble/scramble-command';

export const anonColCommand = new Command('anon-col');

anonColCommand
	.description('anonymize a single column in a table')
	.option('-skip --skip-confirm', 'skip confirmation')
	.addCommand(scrambleCommand)
	.addCommand(maskCommand);
