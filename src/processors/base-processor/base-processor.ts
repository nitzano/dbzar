import {ValueAnonymizer} from '../../anonymizers/value-anonymizer/value-anonymizer';
import {Config} from '../../config/types';
import {ProviderType} from '../../types/types';

export interface Processor {
	processDb?(config: Config, dbName?: string): void;
	processTable?(config: Config, tableName: string, dbName?: string): void;
	processColumn(
		tableName: string,
		columnName: string,
		provider: ProviderType,
		dbName?: string,
	): void;
}

export class BaseProcessor {
	protected valueAnonymizer: ValueAnonymizer = new ValueAnonymizer();
	constructor(protected readonly uri: string) {}
}
