import {cyan, magenta} from 'chalk';
import ora from 'ora';
import {providerEmoji} from '../../../anonymizers/consts/provider-emoji';
import {providerVerb} from '../../../anonymizers/consts/provider-verb';
import {Processor} from '../../../processors/base-processor/processor';
import {Collection} from '../../../processors/types/collection';
import {ProviderType} from '../../../types/types';

async function processCollection(
	collection: Collection,
	processor: Processor,
): Promise<void> {
	const anonymizerName: ProviderType = collection.anonymizer.name;
	const {anonymizer, tableName, columnName, dbName} = collection;

	const collectionSpinner = ora({
		text: `${providerVerb[anonymizerName]} ${magenta(
			collection.columnName,
		)} in ${cyan(collection.tableName)}`,
		prefixText: `${providerEmoji[anonymizerName]}`,
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
	processor: Processor,
	collections: Collection[],
): Promise<void> {
	console.log(`Processing db ${magenta(dbName)}`);

	for await (const collection of collections) {
		await processCollection(collection, processor);
	}
}
