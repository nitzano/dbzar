import {prompt} from 'enquirer';
import {anonymizeColumn} from './anon-column';

export async function anonColAction(
	uri: string,
	db: string,
	table: string,
	column: string,
	options: any,
) {
	try {
		const answer = await prompt<{run: boolean}>({
			skip: options.skipConfirm === true,
			type: 'confirm',
			name: 'run',
			message: `Are you sure you want to anonymize column "${column}" in "${db}/${table}" `,
			initial: 'true',
		});
		if (!answer.run) {
			return;
		}
	} catch (error: unknown) {
		console.error(error);
		throw new Error('could not receive answer');
	}

	await anonymizeColumn(uri, table, column, options.provider, db);
}
