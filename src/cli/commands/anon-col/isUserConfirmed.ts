import { prompt } from 'enquirer';

export async function isUserConfirmed(): Promise<boolean> {
	try {
		const answer = await prompt<{run: boolean}>({
			type: 'confirm',
			name: 'run',
			message: `Are you sure you want to anonymize column "${column}" in "${db}/${table}" `,
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
