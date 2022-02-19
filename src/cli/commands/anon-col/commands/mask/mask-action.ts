import {Command} from 'commander';
import {MaskAnonymizer} from '../../../../../anonymizers/mask/mask-anonymizer';
import {
	defaultMaskOptions,
	MaskOptions,
} from '../../../../../anonymizers/mask/mask-options';
import {processColumn} from '../../helpers/process-column';

export async function maskAction(this: Command) {
	const maskOptions: MaskOptions = {
		...defaultMaskOptions,
		character: this.opts().character as string,
	};

	const [connectionString, dbName, tableName, columnName] = this.args;

	// Build anonymizer
	const anonymizer: MaskAnonymizer = new MaskAnonymizer(maskOptions);

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