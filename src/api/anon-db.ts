import {getProcessor} from '../cli/commands/anon-col/helpers/get-processor';
import {Config} from '../config/types';
import {Processor} from '../processors/base-processor/processor';
import {getCollections} from '../processors/utils/get-collections';

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

	if (processor) {
		// Process db
		const collections = getCollections(config);
		const promises = collections.map(
			async ({tableName, columnName, anonymizer}) =>
				processor.processColumn(tableName, columnName, anonymizer, dbName),
		);
		await Promise.all(promises);
	}

	throw new Error(`could not detect processor for uri`);
}
