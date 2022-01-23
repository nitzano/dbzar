import {BaseAnonymizer} from '../base/base-anonymizer';

export class MaskAnonymizer extends BaseAnonymizer {
	anonymizeString(_value: string): string {
		return '****';
	}
}
