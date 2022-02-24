import {Command} from 'commander';
import {addConnectionOptions} from '../../helpers/add-connection-options';
import {scrambleAction} from './scramble-action';

export const scrambleCommand = new Command('scramble');

scrambleCommand.description('scramble a single column').action(scrambleAction);

addConnectionOptions(scrambleCommand);
