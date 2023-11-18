import ora from 'ora';
import {type Anonymizer} from '../../../../anonymizers/types/anonymizer.type';
import {type Processor} from '../../../../processors/base-processor/processor';
import {getDatabaseProcessor} from '../../../../processors/get-db-processor';
import {isUserConfirmed} from '../../helpers/is-user-confirmed';

export async function processColumn(
	connectionString: string,
	anonymizer: Anonymizer,
	dbName: string,
	tableName: string,
	columnName: string,
	checkConfirm = true,
) {
	const processor: Processor | undefined =
		getDatabaseProcessor(connectionString);

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
