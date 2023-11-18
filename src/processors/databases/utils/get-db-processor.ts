import {DatabaseEngineType} from '../../../config/types';
import {type Processor} from '../../base-processor/processor';
import {MariaDbProcessor} from '../mariadb/mariadb-processor';
import {MongoProcessor} from '../mongo/mongo-processor';
import {PostgresProcessor} from '../postgres/postgres/postgres-processor';
import {getConnectionStringEngine} from './get-connection-string-engine/get-connection-string-engine';

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
