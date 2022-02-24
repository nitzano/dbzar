import {Command} from 'commander';
import {ScrambleAnonymizer} from '../../../../../anonymizers/scramble/scramble-anonymizer';
import {extractConnectionOptions} from '../../helpers/extract-connection-options';
import {processColumn} from '../../helpers/process-column';

export async function scrambleAction(this: Command) {
	const {uri, database, table, column} = extractConnectionOptions(this);

	// Build anonymizer
	const anonymizer: ScrambleAnonymizer = new ScrambleAnonymizer();

	// Anonymize column
	await processColumn(
		uri,
		anonymizer,
		database,
		table,
		column,
		this.optsWithGlobals().confirm,
	);
}
