import {BaseAnonymizer} from '../base/base-anonymizer';
import {FakeOptions} from './fake-options';

export class FakeAnonymizer extends BaseAnonymizer {
	constructor(private readonly options: FakeOptions) {
		super();
	}

	anonymizeString(value: string): string {
		switch (this.options.fakeValue) {
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
}
