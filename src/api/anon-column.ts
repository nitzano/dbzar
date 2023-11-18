import {type Anonymizer} from '../anonymizers/types/anonymizer.type';
import {createAnonymizer} from '../anonymizers/utils/create-anonymizer';
import {createLogger} from '../common/services/loggers/debug-logger';
import {type Processor} from '../processors/base-processor/processor';
import {getDatabaseProcessor} from '../processors/databases/utils/get-db-processor';
import {type Provider} from '../types/types';

const logger = createLogger(__filename);

/**
 *
 *
 * @export
 * @param {string} uri - connection string
 * @param {string} dbName  - database name
 * @param {string} tableName  - table name
 * @param {string} columnName - column name
 * @param {Provider} provider - provider to process column with
 * @return {*}  {Promise<void>}
 */
export async function anonColumn(
	uri: string,
	dbName: string,
	tableName: string,
	columnName: string,
	provider: Provider,
): Promise<void> {
	if (!uri) {
		throw new Error('No uri in configuration');
	}

	const processor: Processor | undefined = getDatabaseProcessor(uri);

	logger(`processing ${dbName}`);
	if (processor) {
		const anonymizer: Anonymizer = createAnonymizer(
			provider.type,
			provider.options,
		);

		if (anonymizer) {
			await processor.processColumn(tableName, columnName, anonymizer, dbName);
			return;
		}

		throw new Error('could not find anonymizer for the provider');
	}

	throw new Error(`could not detect processor for uri`);
}
