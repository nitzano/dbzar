import {Option} from 'commander';
import {ProviderType} from '../types/types';

export enum EngineType {
	PostGres = 'postgres',
	Mongo = 'mongo',
	MariaDB = 'mariadb',
	MySQL = 'mysql',
}

export interface Config {
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
