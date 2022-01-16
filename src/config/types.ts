import {Options} from '../anonymizers';
import {FakeOptions} from '../anonymizers/fake/fake-options';
import {MaskOptions} from '../anonymizers/mask/mask-options';
import {Provider, ProviderType} from '../types/types';

type EngineType = 'mongodb' | 'postgres';

export interface Config {
	engine: EngineType;
	collections?: CollectionConfig[];
	tables?: TableConfig[];

}

interface CollectionConfig {
	name: string;
	documents: DocumentConfig[];
}

interface DocumentConfig {
	name: string;
	provider: ProviderType;
	options: MaskOptions | FakeOptions;
}

interface TableConfig {
	name: string;
	provider: Provider;
	columns: ColumnConfig;
}

interface ColumnConfig {
	name: string;
	provider: ProviderType;
	options: Options;
}
