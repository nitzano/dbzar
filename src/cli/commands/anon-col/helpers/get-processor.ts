import {EngineType} from '../../../../config/types';
import {type Processor} from '../../../../processors/base-processor/processor';
import {MariaDbProcessor} from '../../../../processors/mariadb/mariadb-processor';
import {MongoProcessor} from '../../../../processors/mongo/mongo-processor';
import {PostgresProcessor} from '../../../../processors/postgres/postgres-processor';
import {getConnectionStringEngine} from '../../../../utils/get-connection-string-engine';

export function getProcessor(
	connectionStringUri: string,
): Processor | undefined {
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
			case EngineType.MariaDB:
			case EngineType.MySQL:
				processor = new MariaDbProcessor(connectionStringUri);
				break;
			default:
				break;
		}
	}

	return processor;
}
