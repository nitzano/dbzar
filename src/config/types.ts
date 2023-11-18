import {
	type Provider,
	type ProviderType,
} from '../anonymizers/types/provider.type';

export enum DatabaseEngineType {
	PostGres = 'postgres',
	Mongo = 'mongo',
	MariaDB = 'mariadb',
	MySQL = 'mysql',
}

export type Config = {
	/**
	 * Tables to be processed
	 *
	 * @minItems 1
	 */
	tables?: Table[];
	/**
	 * Database name
	 */
	dbName: string;
	uri?: string;
};

export type Table = {
	name: string;
	/**
	 * Tables to be processed
	 *
	 * @minItems 1
	 */
	columns?: Column[];
};

export type Column = {
	/**
	 * Column Name
	 */
	name: string;
	provider: Provider | ProviderType;
};
