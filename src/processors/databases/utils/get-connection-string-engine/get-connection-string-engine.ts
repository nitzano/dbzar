import {ConnectionString} from 'connection-string';
import {debugLogger} from '../../../../common/services/loggers/debug-logger';
import {DatabaseEngineType} from '../../../../common/config/types';

export function getConnectionStringEngine(
	connectionStringUri: string,
): DatabaseEngineType | undefined {
	if (connectionStringUri) {
		const {protocol} = new ConnectionString(connectionStringUri);
		if (protocol) {
			debugLogger(`protocol = ${protocol}`);
			switch (protocol) {
				case 'postgresql':
					return DatabaseEngineType.PostGres;
				case 'mongodb':
					return DatabaseEngineType.Mongo;
				case 'mariadb':
					return DatabaseEngineType.MariaDB;
				case 'mysql':
					return DatabaseEngineType.MySQL;
				default:
					break;
			}
		}
	}

	return undefined;
}
