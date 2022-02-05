import chalk from 'chalk';
import {prompt} from 'enquirer';

const color = chalk.cyan;

export async function isUserConfirmed(
	column: string,
	db: string,
	table: string,
): Promise<boolean> {
	try {
		const answer = await prompt<{run: boolean}>({
			type: 'confirm',
			name: 'run',
			message: `Are you sure you want to anonymize column "${color(
				column,
			)}" in "${color(db)}/${color(table)}" `,
			initial: 'true',
		});
		if (answer.run) {
			return true;
		}

		return false;
	} catch (error: unknown) {
		console.error(error);
		throw new Error('could not receive answer');
	}
}
