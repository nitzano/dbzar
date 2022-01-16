import {FakeOptions} from '../anonymizers/fake/fake-options';
import {MaskOptions} from '../anonymizers/mask/mask-options';
import {Provider, ProviderType} from '../types/types';

type EngineType = 'mongodb' | 'postgres';

export interface Config {
	engine: EngineType;
	collections?: Collection[];
	tables?: Table[];

}

interface Collection {
	name: string;
	properties: Property[];
}

interface Property {
	name: string;
	provider: ProviderType;
	options: MaskOptions | FakeOptions;
}

interface Table {
	name: string;
	provider: Provider;
}
