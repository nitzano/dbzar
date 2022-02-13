import {magenta} from 'chalk';
import ora from 'ora';
import {providerEmoji} from '../../../anonymizers/consts/provider-emoji';
import {Processor} from '../../../processors/base-processor/processor';
import {Collection} from '../../../processors/types/collection';

export async function processDb(
	dbName: string,
	_processor: Processor,
	collections: Collection[],
): Promise<void> {
	const dbSpinner = ora({
		text: `Processing db ${magenta(dbName)}`,
		color: 'cyan',
	}).start();

	for (const collection of collections) {
		console.log(
			`\n\tprocessing  ${collection.tableName} ${collection.columnName} ${
				providerEmoji[collection.anonymizer.name]
			}`,
		);
	}

	setTimeout(() => {
		dbSpinner.stop();
	}, 3000);
}
