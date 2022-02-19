import {Config} from '../config/types';

export async function anonDb(config: Config): Promise<void> {
	const {uri} = config;

	if (!uri) {
		throw new Error('No uri in configuration');
	}
}
