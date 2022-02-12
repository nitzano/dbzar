import {Command} from 'commander';
import {Config} from 'cosmiconfig/dist/types';
import {loadDbzarConfig} from './utils/load-dbzar-config';

export async function anonDbAction(this: Command) {
	console.log(`loading config`);
	const config: Config | null = await loadDbzarConfig();
	if (config) {
		console.log(`loaded config: ${JSON.stringify(config, null, 2)}`);
	} else {
		console.error(`invalid config, please recheck schema`);
	}
}
