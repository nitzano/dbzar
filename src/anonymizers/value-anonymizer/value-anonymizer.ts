import {ProviderType} from '../../types/types';
import {FakeAnonymizer} from '../fake/fake-anonymizer';
import {MaskAnonymizer} from '../mask/mask-anonymizer';
import {ScrambleAnonymizer} from '../scramble/scramble-anonymizer';

export class ValueAnonymizer {
	private readonly maskAnonymizer = new MaskAnonymizer();
	private readonly fakeAnonymizer = new FakeAnonymizer();
	private readonly scrambleAnonymizer = new ScrambleAnonymizer();

	anonymize(value: any, providerType: ProviderType): any {
		switch (providerType) {
			case 'mask':
				return this.maskAnonymizer.anonymize(value);
			case 'fake':
				return this.fakeAnonymizer.anonymize(value);
			case 'scramble':
				return this.scrambleAnonymizer.anonymize(value);
			default:
				break;
		}

		return value;
	}
}
