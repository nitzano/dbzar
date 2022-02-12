import {cosmiconfig} from 'cosmiconfig';
import {Config} from '../../../../config/types';

const moduleName = 'dbzar';
const explorer = cosmiconfig(moduleName);

export async function loadDbzarConfig(): Promise<Config | undefined> {
	const configResult = await explorer.search();

	if (configResult) {
		const {isEmpty} = configResult;

		if (!isEmpty) {
			const configData: Record<string, unknown> = configResult.config as Record<
				string,
				unknown
			>;
			console.log(configData);
		}
	}

	return undefined;
}
