import {ProviderType} from '../types/types';

export enum EngineType {
	PostGres = 'postgres',
	Mongo = 'mongo',
	MariaDB = 'mariadb',
	MySQL = 'mysql',
}

export interface Config {
	/**
	 * Tables to be processed
	 *
	 * @items.minimum 1
	 */
	tables?: TableConfig[];
}

export interface TableConfig {
	/**
	 * Table name
	 */
	name: string;
	columns: ColumnConfig[];
}

export interface ColumnConfig {
	/**
	 * Column Name
	 */
	name: string;
	provider: ProviderType;
}
