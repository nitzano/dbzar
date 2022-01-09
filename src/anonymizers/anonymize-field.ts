import {Provider} from '../types/types';

export type FieldType = string | number | boolean;

export function anonymizeField(field: FieldType, provider: Provider): FieldType {
	if (provider.type === 'fake') {
		switch (provider.fakeType) {
			case 'firstName':
				return 'firstName';
			case 'lastName':
				return 'lastName';
			default:
				break;
		}
	}

	return '';
}
