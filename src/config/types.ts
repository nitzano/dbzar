import {Provider} from '../types/types';

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
	provider: Provider;
}

interface Table {
	name: string;
	provider: Provider;
}
