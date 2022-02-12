import {Command} from 'commander';
import {Config} from 'cosmiconfig/dist/types';
import {Processor} from '../../../processors/base-processor/processor';
import {getProcessor} from '../anon-col/helpers/get-processor';
import {loadDbzarConfig} from './utils/load-dbzar-config';

export async function anonDbAction(this: Command) {
	console.log(`loading config`);
	let config: Config | undefined;
	try {
		config = await loadDbzarConfig();
		console.log(`loaded config: ${JSON.stringify(config, null, 2)}`);
	} catch (error: unknown) {
		console.error(`Could not load config: ${(error as Error).message}`);
		return;
	}

	// Process columns
	const [uri] = this.args;
	console.log(`uri = ${uri}`);

	const processor: Processor | undefined = getProcessor(uri);

	if (processor) {
		const collections = processor.getCollections(config);
		for (const collection of collections) {
			console.log(
				`processing ${collection.dbName} ${collection.tableName} ${collection.columnName} ${collection.anonymizer.name}`,
			);
		}
	}
}
