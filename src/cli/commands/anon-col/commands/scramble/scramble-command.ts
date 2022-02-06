import {Command} from 'commander';
import {addConnectionArgs} from '../../helpers/add-connection-args';
import {scrambleAction} from './scramble-action';

export const scrambleCommand = new Command('scramble');

scrambleCommand.description('scramble a single column').action(scrambleAction);

addConnectionArgs(scrambleCommand);
