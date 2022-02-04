import {shuffle} from 'lodash';
import {BaseAnonymizer} from '../base/base-anonymizer';

export class ScrambleAnonymizer extends BaseAnonymizer {
	anonymizeString(value: string): string {
		return shuffle(value.split('')).join('');
	}
}
