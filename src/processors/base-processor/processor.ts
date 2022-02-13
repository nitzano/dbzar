import {Anonymizer} from '../../anonymizers/types';

export interface Processor {
	processColumn(
		tableName: string,
		columnName: string,
		anonymizer: Anonymizer,
		dbName?: string,
	): Promise<void>;
}
