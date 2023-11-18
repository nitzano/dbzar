import {DatabaseEngineType} from '../../../../../config/types';
import {getConnectionStringEngine} from '../get-connection-string-engine';

describe('getConnectionStringEngine', () => {
	it('should allow to parse postgres connection string ', () => {
		const engine = getConnectionStringEngine('postgresql://localhost/db1');
		expect(engine).toBe(DatabaseEngineType.PostGres);
	});

	it('should allow to parse mongo connection strings', () => {
		const engine = getConnectionStringEngine(
			'mongodb://root:example@mongo:27017',
		);
		expect(engine).toBe(DatabaseEngineType.Mongo);
	});
});
