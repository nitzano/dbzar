import {cyan, magenta} from 'chalk';
import ora from 'ora';
import {providerEmoji} from '../../../anonymizers/consts/provider-emoji';
import {providerVerb} from '../../../anonymizers/consts/provider-verb';
import {Processor} from '../../../processors/base-processor/processor';
import {Collection} from '../../../processors/types/collection';
import {ProviderType} from '../../../types/types';

async function processCollection(collection: Collection): Promise<void> {
	const anonymizerName: ProviderType = collection.anonymizer.name;

	const collectionSpinner = ora({
		text: `${providerVerb[anonymizerName]} ${magenta(
			collection.columnName,
		)} in ${cyan(collection.tableName)}`,
		prefixText: `${providerEmoji[anonymizerName]}`,
	}).start();

	// Process

	collectionSpinner.succeed();
}

export async function processDb(
	dbName: string,
	_processor: Processor,
	collections: Collection[],
): Promise<void> {
	const dbSpinner = ora({
		text: `Processing db ${magenta(dbName)}`,
		color: 'cyan',
	});

	for await (const collection of collections) {
		await processCollection(collection);
	}

	setTimeout(() => {
		dbSpinner.stop();
	}, 3000);
}
