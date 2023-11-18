import {BaseProcessor} from '../../base-processor/base-processor';

export class FileProcessor extends BaseProcessor {
	constructor(
		protected readonly uri: string,
		protected readonly filepath: string,
	) {
		super(uri);
	}
}
