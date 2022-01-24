import {replace} from 'lodash';
import {BaseAnonymizer} from '../base/base-anonymizer';

export class MaskAnonymizer extends BaseAnonymizer {
	anonymizeString(value: string): string {
		return replace(value, /./g, '*');
	}
}
