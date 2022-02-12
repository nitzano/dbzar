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
	columns?: Column[];
	name: string;
}

export interface Column {
	/**
	 * Column Name
	 */
	name: string;
	/**
	 * Table Name
	 */
	table: string;
	provider: Provider | ProviderType;
}
