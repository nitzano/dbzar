import {ConnectionString} from 'connection-string';
import {EngineType} from '../config/types';
import {debugLogger} from '../services/loggers/debug-logger';

export function getConnectionStringEngine(
	connectionStringUri: string,
): EngineType | undefined {
	if (connectionStringUri) {
		const {protocol} = new ConnectionString(connectionStringUri);
		if (protocol) {
			debugLogger(`protocol = ${protocol}`);
			switch (protocol) {
				case 'postgresql':
					return EngineType.PostGres;
				case 'mongodb':
					return EngineType.Mongo;
				default:
					break;
			}
		}
	}

	return undefined;
}
