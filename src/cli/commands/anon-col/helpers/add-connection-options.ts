import {type Command} from 'commander';

export function addConnectionOptions(cmd: Command): Command {
	return cmd
		.requiredOption('-u --uri <connectionString>', 'Connection string')
		.requiredOption('-db --database <databaseName>', 'Database name')
		.requiredOption('-t --table <tableName>', 'Table name')
		.requiredOption('-c --column <columnName>', 'Column name');
}
