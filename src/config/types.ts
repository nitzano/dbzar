import {Option} from 'commander';
import {ProviderType} from '../types/types';

export enum EngineType {
	PostGres = 'postgres',
	Mongo = 'mongo',
}

export interface Config {
	engine: EngineType;
	tables?: TableConfig[];
}

export interface TableConfig {
	name: string;
	columns: ColumnConfig[];
}

export interface ColumnConfig {
	name: string;
	provider: ProviderType;
	options?: Option;
}
