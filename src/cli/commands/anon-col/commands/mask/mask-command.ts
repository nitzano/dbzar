import {Command} from 'commander';
import {defaultMaskConfig} from '../../../../../anonymizers/mask/mask-options';
import {addConnectionArgs} from '../../helpers/add-connection-args';
import {maskAction} from './mask-action';

export const maskCommand = new Command('mask');

maskCommand
	.description('mask a single column')
	.option(
		'-c --character <char>',
		'Character to mask with',
		defaultMaskConfig.character,
	)
	.action(maskAction);

addConnectionArgs(maskCommand);
