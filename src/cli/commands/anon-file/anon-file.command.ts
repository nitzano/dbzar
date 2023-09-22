import {Command} from 'commander';
import {anonFileAction} from './anon-file.action';

export const anonFileCommand = new Command('anon-file');

anonFileCommand
	.description('Anonymize a single file')
	.argument('[path]', 'file path')
	.action(anonFileAction);
