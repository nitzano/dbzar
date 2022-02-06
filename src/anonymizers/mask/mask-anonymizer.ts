import {replace} from 'lodash';
import {BaseAnonymizer} from '../base/base-anonymizer';
import {defaultMaskOptions, MaskOptions} from './mask-options';

export class MaskAnonymizer extends BaseAnonymizer {
	private readonly options: MaskOptions;

	constructor(maskOptions?: MaskOptions) {
		super();
		this.options = maskOptions ? maskOptions : defaultMaskOptions;
	}

	anonymizeString(value: string): string {
		return replace(value, /./g, this.options.character);
	}
}
