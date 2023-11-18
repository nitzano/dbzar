import {replace} from 'lodash';
import {BaseAnonymizer} from '../base/base-anonymizer';
import {type ProviderType} from '../types/provider.type';
import {defaultMaskOptions, type MaskOptions} from './mask-options';

export class MaskAnonymizer extends BaseAnonymizer {
	name: ProviderType = 'mask';
	private readonly options: MaskOptions;

	constructor(maskOptions?: MaskOptions) {
		super();
		this.options = maskOptions ? maskOptions : defaultMaskOptions;
	}

	anonymizeString(value: string): string {
		return replace(value, /./g, this.options.character);
	}
}
