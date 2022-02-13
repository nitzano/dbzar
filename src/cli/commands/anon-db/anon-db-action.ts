import {magenta} from 'chalk';
import {Command} from 'commander';
import {Config} from 'cosmiconfig/dist/types';
import {providerEmoji} from '../../../anonymizers/consts/provider-emoji';
import {Processor} from '../../../processors/base-processor/processor';
import {getCollections} from '../../../processors/utils/get-collections';
import {createLogger} from '../../../services/loggers/debug-logger';
import {getProcessor} from '../anon-col/helpers/get-processor';
import {loadDbzarConfig} from './utils/load-dbzar-config';

const logger = createLogger(__filename);

export async function anonDbAction(this: Command) {
	logger(`loading config`);
	let config: Config | undefined;
	try {
		config = await loadDbzarConfig();
		logger(`confing = \n${JSON.stringify(config, null, 2)}`);
	} catch (error: unknown) {
		console.error(`Could not load config: ${(error as Error).message}`);
		return;
	}

	// Process columns
	const [uri] = this.args;
	logger(`uri = ${uri}`);

	const processor: Processor | undefined = getProcessor(uri);

	if (processor) {
		const collections = getCollections(config);
		for (const collection of collections) {
			console.log(
				`processing ${magenta(collection.dbName)} ${collection.tableName} ${
					collection.columnName
				} ${providerEmoji[collection.anonymizer.name]}`,
			);
		}
	}
}
