import {Command} from 'commander';
import {anonDbAction} from './anon-db-action';

export const anonDbCommand = new Command('anon-db');

anonDbCommand
	.description('Anonymize an entire database')
	.addCommand(anonDbCommand)
	.action(anonDbAction);
