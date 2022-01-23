import {BaseAnonymizer} from '../base/base-anonymizer';
import {FakeOptions} from './fake-options';

export class FakeAnonymizer extends BaseAnonymizer {
	anonymizeString(value: string, options?: FakeOptions): string {
		switch (options?.fakeValue) {
			case 'firstName':
			case 'first':
				return 'firstName';

			case 'lastName':
			case 'last':
				return 'lastName';
			case 'age':
				return 'age';
			default:
				break;
		}

		return value;
	}

	anonymizeNumber(value: number, options?: FakeOptions): number {
		switch (options?.fakeValue) {
			case 'age':
				return 55;
			default:
				break;
		}

		return value;
	}
}
