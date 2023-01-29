import {type Command} from 'commander';
import {FakeAnonymizer} from '../../../../../anonymizers/fake/fake-anonymizer';
import {
	defaultFakeOptions,
	type FakeOptions,
} from '../../../../../anonymizers/fake/fake-options';
import {type FakeType} from '../../../../../anonymizers/fake/types';
import {processColumn} from '../../helpers/process-column';

export async function fakeAction(this: Command) {
	const fakeType: FakeType | undefined = this.opts().fakeType as
		| FakeType
		| undefined;

	const fakeOptions: FakeOptions = {
		...defaultFakeOptions,
		fakeValue: fakeType ? fakeType : defaultFakeOptions.fakeValue,
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
