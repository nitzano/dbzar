import {Command} from 'commander';
import {fakeCommand} from './commands/fake/fake-command';
import {maskCommand} from './commands/mask/mask-command';
import {scrambleCommand} from './commands/scramble/scramble-command';
import {addConnectionOptions} from './helpers/add-connection-options';

export const anonColCommand = new Command('anon-col');

anonColCommand
	.description('Anonymize a single column in a table')
	.option('-skip --skip-confirm', 'skip confirmation')
	.addCommand(scrambleCommand)
	.addCommand(fakeCommand)
	.addCommand(maskCommand);

addConnectionOptions(anonColCommand);
