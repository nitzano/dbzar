import {BaseAnonymizer} from '../base/base-anonymizer';

export class ScrambleAnonymizer extends BaseAnonymizer {
	anonymizeString(value: string): string {
		return value;
	}
}
