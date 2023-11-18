import {cosmiconfig} from 'cosmiconfig';
import {type Config} from '../../../../common/config/types';
import {validateConfig} from '../../../../common/config/utils/validate-config';
import {createLogger} from '../../../../common/services/loggers/debug-logger';

const moduleName = 'dbzar';
const explorer = cosmiconfig(moduleName);

const logger = createLogger(__filename);

export async function loadDbzarConfig(): Promise<Config> {
	const configResult = await explorer.search();

	if (configResult) {
		const {isEmpty} = configResult;

		if (!isEmpty) {
			const configData: unknown = configResult.config;

			if (configData) {
				logger(`processing ${JSON.stringify(configData, null, 2)}`);
				validateConfig(configData);
				return configData as Config;
			}
		}
	}

	throw new Error('no config file found');
}
