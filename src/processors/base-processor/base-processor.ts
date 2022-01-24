import {ValueAnonymizer} from '../../anonymizers/value-anonymizer/value-anonymizer';
import {ColumnConfig, Config, TableConfig} from '../../config/types';

export interface Processor {
	processDb(dbName: string): void;
	processCollection?(tableConfig: TableConfig): void;
	processDocument?(columnConfig: ColumnConfig): void;
}

export class BaseProcessor {
	protected valueAnonymizer: ValueAnonymizer = new ValueAnonymizer();

	constructor(protected readonly config: Config) {}
}
