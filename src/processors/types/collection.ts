import {Anonymizer} from '../../anonymizers/types';

export interface Collection {
	dbName: string;
	tableName: string;
	columnName: string;
	anonymizer: Anonymizer;
}
