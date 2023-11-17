import {DatabaseEngineType} from '../config/types';
import {getConnectionStringEngine} from '../utils/get-connection-string-engine';
import {type Processor} from './base-processor/processor';
import {MariaDbProcessor} from './db/mariadb/mariadb-processor';
import {MongoProcessor} from './db/mongo/mongo-processor';
import {PostgresProcessor} from './db/postgres/postgres/postgres-processor';

export function getDatabaseProcessor(
	connectionStringUri: string,
): Processor | undefined {
	// Parse the engine
	const engine = getConnectionStringEngine(connectionStringUri);
	let processor: Processor | undefined;

	if (engine) {
		switch (engine) {
			case DatabaseEngineType.Mongo:
				processor = new MongoProcessor(connectionStringUri);
				break;
			case DatabaseEngineType.PostGres:
				processor = new PostgresProcessor(connectionStringUri);
				break;
			case DatabaseEngineType.MariaDB:
			case DatabaseEngineType.MySQL:
				processor = new MariaDbProcessor(connectionStringUri);
				break;
			default:
				break;
		}
	}

	return processor;
}
