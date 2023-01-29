import {type Command} from 'commander';
import {MaskAnonymizer} from '../../../../../anonymizers/mask/mask-anonymizer';
import {
	defaultMaskOptions,
	type MaskOptions,
} from '../../../../../anonymizers/mask/mask-options';
import {extractConnectionOptions} from '../../helpers/extract-connection-options';
import {processColumn} from '../../helpers/process-column';

export async function maskAction(this: Command) {
	const maskOptions: MaskOptions = {
		...defaultMaskOptions,
		character: this.opts().character as string,
	};

	const {uri, database, table, column} = extractConnectionOptions(this);

	// Build anonymizer
	const anonymizer: MaskAnonymizer = new MaskAnonymizer(maskOptions);

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
