import {cosmiconfig} from 'cosmiconfig';
import {Config} from '../../../../config/types';
import {validateConfig} from '../../../../config/utils/validate-config';

const moduleName = 'dbzar';
const explorer = cosmiconfig(moduleName);

export async function loadDbzarConfig(): Promise<Config | null> {
	const configResult = await explorer.search();

	if (configResult) {
		const {isEmpty} = configResult;

		if (!isEmpty) {
			const configData: Record<string, unknown> = configResult.config as Record<
				string,
				unknown
			>;

			if (configData) {
				try {
					// TODO: not checking correctly
					validateConfig(configData);
					return configData as Config;
				} catch (error: unknown) {
					console.error(error);
					return null;
				}
			}
		}
	}

	return null;
}
