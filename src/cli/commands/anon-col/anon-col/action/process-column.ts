import {Anonymizer} from '../../../../../anonymizers';
import {Processor} from '../../../../../processors/base-processor/base-processor';

export async function processColumn(
	processor: Processor,
	anonymizer: Anonymizer,
	tableName: string,
	columnName: string,
	dbName?: string,
) {
	await processor.processColumn(tableName, columnName, anonymizer, dbName);
}
