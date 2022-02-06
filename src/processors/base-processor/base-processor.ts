import {Anonymizer} from '../../anonymizers';
import {Config} from '../../config/types';

export interface Processor {
	processDb?(config: Config, dbName?: string): void;
	processTable?(config: Config, tableName: string, dbName?: string): void;
	processColumn(
		tableName: string,
		columnName: string,
		anonymizer: Anonymizer,
		dbName?: string,
	): Promise<void>;
}

export class BaseProcessor {
	constructor(protected readonly uri: string) {}
}
