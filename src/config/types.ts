import {Option} from 'commander';
import {ProviderType} from '../types/types';

type EngineType = 'mongodb' | 'postgres';

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
