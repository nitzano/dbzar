import {ValueAnonymizer} from '../../anonymizers/value-anonymizer/value-anonymizer';
import {Config} from '../../config/types';
import {ProviderType} from '../../types/types';

export interface Processor {
	processDb(config: Config, dbName?: string): void;
	processTable?(config: Config, tableName: string): void;
	processColumn(
		dbName: string,
		tableName: string,
		columnName: string,
		provider: ProviderType,
	): void;
}

export class BaseProcessor {
	protected valueAnonymizer: ValueAnonymizer = new ValueAnonymizer();
	constructor(protected readonly uri: string) {}
}
