import {EngineType} from '../config/types';
import {getConnectionStringEngine} from '../utils/get-connection-string-engine';
import {type Processor} from './base-processor/processor';
import {MariaDbProcessor} from './databases/mariadb/mariadb-processor';
import {MongoProcessor} from './databases/mongo/mongo-processor';
import {PostgresProcessor} from './databases/postgres/postgres/postgres-processor';

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
