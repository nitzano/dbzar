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
	tables?: Table[];
}

export interface Table {
	/**
	 * Table name
	 */
	name: string;
	columns: Column[];
}

export interface Column {
	/**
	 * Column Name
	 */
	name: string;
	provider: ProviderType;
}
