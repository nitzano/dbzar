import {ColumnConfig, Config, TableConfig} from '../../config/types';

export interface Processor {
	processDb(dbName: string): void;
	processTable(tableConfig: TableConfig): void;
	processColumn(columnConfig: ColumnConfig): void;
}

export class BaseProcessor {
	constructor(private readonly config: Config) {}
}
