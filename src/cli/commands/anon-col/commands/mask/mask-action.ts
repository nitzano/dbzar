import {Command} from 'commander';

export function maskAction(this: Command) {
	console.log(this.name());
}
