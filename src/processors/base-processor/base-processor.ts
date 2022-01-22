import {ColumnConfig, Config, TableConfig} from '../../config/types';

export interface Processor {
	processDb(dbName: string): Promise<void>;
	processTable(tableConfig: TableConfig): Promise<void>;
	processColumn(columnConfig: ColumnConfig): Promise<void>;
}

export class BaseProcessor {
	constructor(readonly config: Config) {}
}
