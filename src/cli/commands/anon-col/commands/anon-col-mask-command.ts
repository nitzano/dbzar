import {Command} from 'commander';
import {defaultMaskConfig} from '../../../../anonymizers/mask/mask-options';
import {anonColAction} from '../anon-col-action';

export const maskCommand = new Command('mask');

maskCommand
	.description('mask a single column')
	.option(
		'-c --character <char>',
		'Character to mask with',
		defaultMaskConfig.character,
	)
	.action(anonColAction);
