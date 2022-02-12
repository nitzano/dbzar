import {Anonymizer} from '../../anonymizers/types';
import {Config} from '../../config/types';
import {Collection} from './collection';

export interface Processor {
	getCollections(config: Config): Collection[];
	processColumn(
		tableName: string,
		columnName: string,
		anonymizer: Anonymizer,
		dbName?: string,
	): Promise<void>;
}
