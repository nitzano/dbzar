import {getProcessor} from '../cli/commands/anon-col/helpers/get-processor';
import {Config} from '../config/types';
import {Processor} from '../processors/base-processor/processor';
import {getCollections} from '../processors/utils/get-collections';
import {createLogger} from '../services/loggers/debug-logger';

const logger = createLogger(__filename);

/**
 * Anonymize entire database
 *
 * @export
 * @param {Config} config
 * @return {*}  {Promise<void>}
 */
export async function anonDbd(config: Config): Promise<void> {
	const {uri, dbName} = config;

	if (!uri) {
		throw new Error('No uri in configuration');
	}

	const processor: Processor | undefined = getProcessor(uri);

	logger(`processing ${dbName}`);
	if (processor) {
		const collections = getCollections(config);
		logger(`processing ${collections?.length} collections`);
		const promises = collections.map(
			async ({tableName, columnName, anonymizer}) =>
				processor.processColumn(tableName, columnName, anonymizer, dbName),
		);
		await Promise.all(promises);
	}

	throw new Error(`could not detect processor for uri`);
}
