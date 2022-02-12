import {Anonymizer} from '../../anonymizers/types';
import {Config} from '../../config/types';

export interface Processor {
	processTable?(config: Config, tableName: string, dbName?: string): void;
	processColumn(
		tableName: string,
		columnName: string,
		anonymizer: Anonymizer,
		dbName?: string,
	): Promise<void>;
}
