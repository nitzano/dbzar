import {Command} from 'commander';
import {anonDbAction} from './anon-db-action';

export const anonDbCommand = new Command('anon-db');

anonDbCommand
	.description('anonymize an entire database')
	.argument('[uri]', 'connection string')
	.action(anonDbAction);
