import {ConnectionString} from 'connection-string';
import {DbEngineType} from '../config/types';
import {debugLogger} from '../services/loggers/debug-logger';

export function getConnectionStringEngine(
	connectionStringUri: string,
): DbEngineType | undefined {
	if (connectionStringUri) {
		const {protocol} = new ConnectionString(connectionStringUri);
		if (protocol) {
			debugLogger(`protocol = ${protocol}`);
			switch (protocol) {
				case 'postgresql':
					return DbEngineType.PostGres;
				case 'mongodb':
					return DbEngineType.Mongo;
				case 'mariadb':
					return DbEngineType.MariaDB;
				case 'mysql':
					return DbEngineType.MySQL;
				default:
					break;
			}
		}
	}

	return undefined;
}
