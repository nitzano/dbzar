import {Command, Option} from 'commander';
import {defaultFakeOptions} from '../../../../../anonymizers/fake/fake-options';
import {fakeTypes} from '../../../../../anonymizers/fake/types';
import {addConnectionArgs} from '../../helpers/add-connection-args';
import {fakeAction} from './fake-action';

export const fakeCommand = new Command('fake');

fakeCommand
	.description('fake a single column')
	.addOption(
		new Option('-f --fake <type>', 'Value to fake with')
			.choices(fakeTypes)
			.default(defaultFakeOptions.fakeValue),
	)
	.action(fakeAction);

addConnectionArgs(fakeCommand);
