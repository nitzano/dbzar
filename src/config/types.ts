import {Options} from '../anonymizers';
import {FakeOptions} from '../anonymizers/fake/fake-options';
import {MaskOptions} from '../anonymizers/mask/mask-options';
import {Provider, ProviderType} from '../types/types';

type EngineType = 'mongodb' | 'postgres';

export interface Config {
	engine: EngineType;
	tables?: TableConfig[];

}

export interface CollectionConfig {
	name: string;
	documents: DocumentConfig[];
}

export interface DocumentConfig {
	name: string;
	provider: ProviderType;
	options: MaskOptions | FakeOptions;
}

export interface TableConfig {
	name: string;
	provider: Provider;
	columns: ColumnConfig;
}

export interface ColumnConfig {
	name: string;
	provider: ProviderType;
	options: Options;
}
