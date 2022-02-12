import {cosmiconfigSync} from 'cosmiconfig';
import {Config} from '../../../../config/types';

let explorer: any;

const moduleName = 'dbzar';

export function loadDbzarConfig(): Config {
	if (!explorer) {
		explorer = cosmiconfigSync(moduleName);
	}

	throw new Error('not working');
}
