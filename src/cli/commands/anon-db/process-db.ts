import {cyan, magenta, yellow} from 'chalk';
import ora from 'ora';
import {providerEmoji} from '../../../anonymizers/consts/provider-emoji';
import {providerVerb} from '../../../anonymizers/consts/provider-verb';
import {type ProviderType} from '../../../anonymizers/types/provider.type';
import {type DatabaseProcessor} from '../../../processors/base-processor/database-processor';
import {type Collection} from '../../../processors/databases/types/collection';

async function processCollection(
	collection: Collection,
	processor: DatabaseProcessor,
): Promise<void> {
	const anonymizerName: ProviderType = collection.anonymizer.name;
	const {anonymizer, tableName, columnName, dbName} = collection;

	const prefixText = providerEmoji[anonymizerName] ?? '';

	const collectionSpinner = ora({
		text: `${providerVerb[anonymizerName]} ${magenta(
			collection.columnName,
		)} in ${cyan(collection.tableName)}`,
		prefixText,
	}).start();

	// Process
	try {
		await processor.processColumn(tableName, columnName, anonymizer, dbName);
	} catch (error: unknown) {
		console.error(error);
		collectionSpinner.fail();
	}

	collectionSpinner.succeed();
}

export async function processDb(
	dbName: string,
	processor: DatabaseProcessor,
	collections: Collection[],
): Promise<void> {
	console.log(`\nProcessing db ${yellow(dbName)}\n`);

	for await (const collection of collections) {
		await processCollection(collection, processor);
	}
}
