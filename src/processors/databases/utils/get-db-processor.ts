import {DatabaseEngineType} from '../../../config/types';
import {type DatabaseProcessor} from '../../base-processor/database-processor';
import {MariaDbProcessor} from '../mariadb/mariadb-processor';
import {MongoProcessor} from '../mongo/mongo-processor';
import {PostgresProcessor} from '../postgres/postgres/postgres-processor';
import {getConnectionStringEngine} from './get-connection-string-engine/get-connection-string-engine';

export function getDatabaseProcessor(
	connectionStringUri: string,
): DatabaseProcessor | undefined {
	// Parse the engine
	const engine = getConnectionStringEngine(connectionStringUri);
	let processor: DatabaseProcessor | undefined;

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
