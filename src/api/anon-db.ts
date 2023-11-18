import {type Config} from '../common/config/types';
import {createLogger} from '../common/services/loggers/debug-logger';
import {type DatabaseProcessor} from '../processors/base-processor/database-processor';
import {getCollections} from '../processors/databases/utils/get-collections';
import {getDatabaseProcessor} from '../processors/databases/utils/get-db-processor';

const logger = createLogger(__filename);

/**
 * Anonymize entire database
 *
 * @export
 * @param {Config} config
 * @return {*}  {Promise<void>}
 */
export async function anonDb(config: Config): Promise<void> {
	const {uri, dbName} = config;

	if (!uri) {
		throw new Error('No uri in configuration');
	}

	const processor: DatabaseProcessor | undefined = getDatabaseProcessor(uri);

	logger(`processing ${dbName}`);
	if (processor) {
		const collections = getCollections(config);
		logger(`processing ${collections?.length} collections`);
		const promises = collections.map(
			async ({tableName, columnName, anonymizer}) =>
				processor.processColumn(tableName, columnName, anonymizer, dbName),
		);
		await Promise.all(promises);
		return;
	}

	throw new Error(`could not detect processor for uri`);
}
