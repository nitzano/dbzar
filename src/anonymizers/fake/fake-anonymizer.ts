import {Chance} from 'chance';
import {BaseAnonymizer} from '../base/base-anonymizer';
import {type ProviderType} from '../types/provider.type';
import {type FakeOptions} from './fake-options';

const chance = new Chance();

export class FakeAnonymizer extends BaseAnonymizer {
	name: ProviderType = 'fake';
	constructor(private readonly options: FakeOptions) {
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
			case 'name':
				return chance.name();
			case 'animal':
				return chance.animal();
			case 'email':
				return chance.email();
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
