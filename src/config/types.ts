import {Provider, ProviderType} from '../types/types';

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
	 * @minItems 1
	 */
	tables?: Table[];
}

export interface Table {
	/**
	 * Table name
	 */
	name: string;
	/**
	 * Columns to be processed
	 *
	 * @minItems 1
	 */
	columns: Column[];
}

export interface Column {
	/**
	 * Column Name
	 */
	name: string;
	provider: Provider | ProviderType;
}
