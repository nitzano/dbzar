import {extname} from 'path';
import {type Command} from 'commander';
import {createLogger} from '../../../common/services/loggers/debug-logger';

const logger = createLogger(__filename);

export async function anonFileAction(this: Command) {
	logger('processing file');

	const [filePath] = this.args;
	logger(`filePath = ${filePath}`);

	if (filePath) {
		const extension = extname(filePath)?.slice(1).toLowerCase();

		if (extension === 'csv') {
			logger('parsing csv file');
		}
	} else {
		throw new Error('no file path');
	}
}
