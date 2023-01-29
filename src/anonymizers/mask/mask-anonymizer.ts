import {replace} from 'lodash';
import {type ProviderType} from '../../types/types';
import {BaseAnonymizer} from '../base/base-anonymizer';
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
