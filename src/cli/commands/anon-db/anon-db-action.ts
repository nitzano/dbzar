import {Command} from 'commander';
import {Config} from 'cosmiconfig/dist/types';
import {loadDbzarConfig} from './utils/load-dbzar-config';

export async function anonDbAction(this: Command) {
	console.log(`loading config`);
	try {
		const config: Config = await loadDbzarConfig();
		console.log(`loaded config: ${JSON.stringify(config, null, 2)}`);
	} catch (error: unknown) {
		console.error(`Could not load config: ${(error as Error).message}`);
	}
}
