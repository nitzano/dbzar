import {type Anonymizer} from '../../../anonymizers/types';
import {createAnonymizer} from '../../../anonymizers/utils/create-anonymizer';
import {type Config} from '../../../config/types';
import {type Collection} from '../types/collection';

export function getCollections(config: Config): Collection[] {
	const {dbName, tables = []} = config;

	const collections: Collection[] = [];

	// Flat tables
	for (const {name: tableName, columns = []} of tables) {
		for (const {name: columnName, provider} of columns) {
			let anonymizer: Anonymizer | undefined;

			if (typeof provider === 'string') {
				anonymizer = createAnonymizer(provider);
			} else if (typeof provider === 'object') {
				anonymizer = createAnonymizer(provider.type, provider.options);
			}

			if (anonymizer) {
				collections.push({dbName, tableName, columnName, anonymizer});
			}
		}
	}

	return collections;
}
