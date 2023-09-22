import {type Anonymizer} from '../../../anonymizers/types';

export type Collection = {
	dbName: string;
	tableName: string;
	columnName: string;
	anonymizer: Anonymizer;
};
