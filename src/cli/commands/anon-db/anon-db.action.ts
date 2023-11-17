import {type Command} from 'commander';
import {type Config} from '../../../config/types';
import {type Processor} from '../../../processors/base-processor/processor';
import {getCollections} from '../../../processors/db/utils/get-collections';
import {getDatabaseProcessor} from '../../../processors/get-db-processor';
import {createLogger} from '../../../services/loggers/debug-logger';
import {processDb} from './process-db';
import {loadDbzarConfig} from './utils/load-dbzar-config';

const logger = createLogger(__filename);

export async function anonDbAction(this: Command) {
	logger(`loading config`);
	let config: Config | undefined;
	try {
		config = await loadDbzarConfig();
	} catch (error: unknown) {
		console.error(`Could not load config: ${(error as Error).message}`);
		return;
	}

	// Process columns
	const [cliUri] = this.args;
	const uri: string = cliUri ?? config.uri;

	logger(`uri = ${uri}`);

	const processor: Processor | undefined = getDatabaseProcessor(uri);
	const collections = getCollections(config);

	if (processor && collections) {
		await processDb(config.dbName, processor, collections);
	}
}
