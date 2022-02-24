import {Command} from 'commander';

export interface ConnectionOptions {
	connectionString?: string;
	databaseName?: string;
	tableName?: string;
	columnName?: string;
}

export function extractConnectionOptions(command: Command): ConnectionOptions {
	const {
		uri: connectionString = undefined,
		database: databaseName = undefined,
		table: tableName = undefined,
		column: columnName = undefined,
	} = command.optsWithGlobals();

	return {
		connectionString,
		databaseName,
		tableName,
		columnName,
	};
}
