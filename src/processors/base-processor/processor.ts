import {type Anonymizer} from '../../anonymizers/types/anonymizer.type';

export type Processor = {
	processColumn(
		tableName: string,
		columnName: string,
		anonymizer: Anonymizer,
		dbName?: string,
	): Promise<void>;
};
