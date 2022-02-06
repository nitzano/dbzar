import ora from 'ora';
import {isUserConfirmed} from '../../helpers/is-user-confirmed';
import {processColumn} from './process-column';

export async function anonColAction(
	uri: string,
	db: string,
	table: string,
	column: string,
	options: any,
) {
	// Check if need to confirm
	if (options.confirm) {
		const isConfirmed = await isUserConfirmed(column, db, table);
		if (!isConfirmed) {
			return;
		}
	}

	const spinner = ora('Anonymizing column').start();
	await processColumn(uri, table, column, options.provider, db);
	spinner.stop();
}
