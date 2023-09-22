import {type Command} from 'commander';
import {createLogger} from '../../../services/loggers/debug-logger';

const logger = createLogger(__filename);

export async function anonFileAction(this: Command) {
	logger('processing file');
}
