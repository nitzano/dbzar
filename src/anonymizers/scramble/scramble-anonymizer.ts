import {shuffle} from 'lodash';
import {BaseAnonymizer} from '../base/base-anonymizer';
import {type ProviderType} from '../types/provider.type';

export class ScrambleAnonymizer extends BaseAnonymizer {
	name: ProviderType = 'scramble';
	anonymizeString(value: string): string {
		if (value?.length) {
			return shuffle(value.split('')).join('');
		}

		return value;
	}
}
