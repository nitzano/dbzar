import ora from 'ora';
import {Anonymizer} from '../../../../anonymizers/types';
import {Processor} from '../../../../processors/base-processor/processor';
import {getProcessor} from './get-processor';
import {isUserConfirmed} from './is-user-confirmed';

export async function processColumn(
	connectionString: string,
	anonymizer: Anonymizer,
	dbName: string,
	tableName: string,
	columnName: string,
	checkConfirm = true,
) {
	const processor: Processor | undefined = getProcessor(connectionString);

	if (processor) {
		// Check confirm
		if (checkConfirm) {
			const isConfirmed: boolean = await isUserConfirmed(
				dbName,
				tableName,
				columnName,
			);
			if (!isConfirmed) return;
		}

		const spinner = ora('Anonymizing column').start();
		await processor.processColumn(tableName, columnName, anonymizer, dbName);
		spinner.stop();
	} else {
		throw new Error(`could not find processor for connection string`);
	}
}
