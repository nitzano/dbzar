import {Command} from 'commander';
import {loadDbzarConfig} from './utils/load-dbzar-config';

export async function anonDbAction(this: Command) {
	console.log('anon db!');
	const config = await loadDbzarConfig();
	console.log(config);
}
