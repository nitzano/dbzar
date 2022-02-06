import {Command} from 'commander';
import {ScrambleAnonymizer} from '../../../../../anonymizers/scramble/scramble-anonymizer';
import {processColumn} from '../../helpers/process-column';

export async function scrambleAction(this: Command) {
	const [connectionString, dbName, tableName, columnName] = this.args;

	// Build anonymizer
	const anonymizer: ScrambleAnonymizer = new ScrambleAnonymizer();

	// Anonymize column
	await processColumn(
		connectionString,
		anonymizer,
		dbName,
		tableName,
		columnName,
		this.optsWithGlobals().confirm,
	);
}
