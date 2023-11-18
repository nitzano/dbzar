import {type ProviderType} from '../types/provider.type';

export const providerVerb: Record<ProviderType, string> = {
	mask: 'Masking',
	fake: 'Faking',
	scramble: 'Scrambling',
	const: 'Turning into const',
	remove: 'Removing',
};
