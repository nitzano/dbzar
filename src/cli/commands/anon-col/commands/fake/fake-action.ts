import {Command} from 'commander';
import {FakeAnonymizer} from '../../../../../anonymizers/fake/fake-anonymizer';
import {
	defaultFakeOptions,
	FakeOptions,
} from '../../../../../anonymizers/fake/fake-options';
import {FakeType} from '../../../../../anonymizers/fake/types';
import {processColumn} from '../../helpers/process-column';

export async function fakeAction(this: Command) {
	const fakeOptions: FakeOptions = {
		...defaultFakeOptions,
		fakeValue: this.opts().value as FakeType,
	};

	const [connectionString, dbName, tableName, columnName] = this.args;

	// Build anonymizer
	const anonymizer: FakeAnonymizer = new FakeAnonymizer(fakeOptions);

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
