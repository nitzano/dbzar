import {type Anonymizer} from '../../anonymizers/types/anonymizer.type';

export type DatabaseProcessor = {
	processColumn(
		tableName: string,
		columnName: string,
		anonymizer: Anonymizer,
		dbName?: string,
	): Promise<void>;
};
