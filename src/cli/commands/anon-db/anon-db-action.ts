import {Command} from 'commander';
import {Config} from 'cosmiconfig/dist/types';
import {Processor} from '../../../processors/base-processor/processor';
import {getCollections} from '../../../processors/utils/get-collections';
import {createLogger} from '../../../services/loggers/debug-logger';
import {getProcessor} from '../anon-col/helpers/get-processor';
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
	const [uri] = this.args;
	logger(`uri = ${uri}`);

	const processor: Processor | undefined = getProcessor(uri);
	const collections = getCollections(config);

	if (processor && collections) {
		await processDb(config.name, processor, collections);
	}
}
