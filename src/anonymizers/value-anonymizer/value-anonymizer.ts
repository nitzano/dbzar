import {ProviderType} from '../../types/types';
import {FakeAnonymizer} from '../fake/fake-anonymizer';
import {MaskAnonymizer} from '../mask/mask-anonymizer';

export class ValueAnonymizer {
	private readonly maskAnonymizer = new MaskAnonymizer();
	private readonly fakeAnonymizer = new FakeAnonymizer();

	anonymize(value: any, providerType: ProviderType): any {
		switch (providerType) {
			case 'mask':
				return this.maskAnonymizer.anonymize(value);
			case 'fake':
				return this.fakeAnonymizer.anonymize(value);
			default:
				break;
		}

		return value;
	}
}
