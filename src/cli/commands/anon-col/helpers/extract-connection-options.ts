import {Command} from 'commander';

export interface ConnectionOptions {
	uri: string;
	database: string;
	table: string;
	column: string;
}

export function extractConnectionOptions(command: Command): ConnectionOptions {
	const {uri, database, table, column} =
		command.optsWithGlobals<ConnectionOptions>();

	return {
		uri,
		database,
		table,
		column,
	};
}
