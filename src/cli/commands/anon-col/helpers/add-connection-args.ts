import {Command} from 'commander';

export function addConnectionArgs(cmd: Command): Command {
	return cmd
		.argument('<uri>', 'connection string')
		.argument('<db>', 'database name')
		.argument('<table>', 'table name')
		.argument('<column>', 'column name');
}
