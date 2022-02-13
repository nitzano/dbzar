import {shuffle} from 'lodash';
import {ProviderType} from '../../types/types';
import {BaseAnonymizer} from '../base/base-anonymizer';

export class ScrambleAnonymizer extends BaseAnonymizer {
	name: ProviderType = 'scramble';
	anonymizeString(value: string): string {
		if (value?.length) {
			return shuffle(value.split('')).join('');
		}

		return value;
	}
}
