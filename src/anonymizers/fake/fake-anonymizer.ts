import {Chance} from 'chance';
import {BaseAnonymizer} from '../base/base-anonymizer';
import {defaultFakeOptions, FakeOptions} from './fake-options';

const chance = new Chance();

export class FakeAnonymizer extends BaseAnonymizer {
	constructor(private readonly options: FakeOptions = defaultFakeOptions) {
		super();
	}

	anonymizeString(value: string): string {
		switch (this.options.fakeValue) {
			case 'firstName':
			case 'first':
				return chance.first();
			case 'lastName':
			case 'last':
				return chance.last();
			case 'word':
				return chance.word();
			default:
				break;
		}

		return value;
	}

	anonymizeNumber(value: number): number {
		switch (this.options.fakeValue) {
			case 'age':
				return chance.age();
			default:
				break;
		}

		return value;
	}
}
