import {Command} from 'commander';

export function addConnectionOptions(cmd: Command): Command {
	return cmd
		.requiredOption('-u --uri', 'Connection string')
		.requiredOption('-db --database', 'Database name')
		.requiredOption('-t --table', 'Table name')
		.requiredOption('-c --column', 'Column name');
}
