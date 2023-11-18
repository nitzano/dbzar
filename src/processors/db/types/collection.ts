import {type Anonymizer} from '../../../anonymizers/types/anonymizer.type';

export type Collection = {
	dbName: string;
	tableName: string;
	columnName: string;
	anonymizer: Anonymizer;
};
