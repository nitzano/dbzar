import {BaseAnonymizer} from '../base/base-anonymizer';
import {MaskOptions} from './mask-options';

export class MaskAnonymizer extends BaseAnonymizer {
	constructor(private readonly options: MaskOptions) {
		super();
	}

	anonymizeString(_value: string): string {
		return '****';
	}
}
