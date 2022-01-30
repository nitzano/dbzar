import {EngineType} from '../../config/types';
import {Processor} from '../../processors/base-processor/base-processor';
import {MongoProcessor} from '../../processors/mongo/mongo-processor';
import {PostgresProcessor} from '../../processors/postgres/postgres-processor';
import {ProviderType} from '../../types/types';
import {getConnectionStringEngine} from '../../utils/get-connection-string-engine';

export async function anonymizeColumn(
	connectionStringUri: string,
	tableName: string,
	columnName: string,
	provider: ProviderType,
) {
	// Parse the engine
	const engine = getConnectionStringEngine(connectionStringUri);
	let processor: Processor | undefined;

	if (engine) {
		switch (engine) {
			case EngineType.Mongo:
				processor = new MongoProcessor(connectionStringUri);
				break;
			case EngineType.PostGres:
				processor = new PostgresProcessor(connectionStringUri);
				break;
			default:
				break;
		}

		if (processor) {
			await processor.processColumn(tableName, columnName, provider);
		}
	}
}
