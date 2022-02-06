import {Anonymizer} from '../../../../../anonymizers';
import {Processor} from '../../../../../processors/base-processor/base-processor';
import {getProcessor} from '../../helpers/get-processor';
import {isUserConfirmed} from '../../helpers/is-user-confirmed';

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

		await processor.processColumn(tableName, columnName, anonymizer, dbName);
	} else {
		throw new Error(`could not find processor for connection string`);
	}
}
