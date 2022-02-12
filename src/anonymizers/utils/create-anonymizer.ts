import {ProviderType} from '../../types/types';
import {FakeAnonymizer} from '../fake/fake-anonymizer';
import {defaultFakeOptions} from '../fake/fake-options';
import {MaskAnonymizer} from '../mask/mask-anonymizer';
import {defaultMaskOptions} from '../mask/mask-options';
import {ScrambleAnonymizer} from '../scramble/scramble-anonymizer';
import {Anonymizer} from '../types';

export function createAnonymizer(
	type: ProviderType,
	options?: any,
): Anonymizer | null {
	switch (type) {
		case 'mask':
			return new MaskAnonymizer({...defaultMaskOptions, ...options});
		case 'fake':
			return new FakeAnonymizer({...defaultFakeOptions, ...options});
		case 'scramble':
			return new ScrambleAnonymizer();
		default:
			break;
	}

	return null;
}
