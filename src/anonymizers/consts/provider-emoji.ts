import {get} from 'node-emoji';
import {type ProviderType} from '../types/provider.type';

export const providerEmoji: Record<ProviderType, string | undefined> = {
	mask: get('performing_arts'),
	fake: get('four_leaf_clover'),
	const: get('ice_cube'),
	scramble: get('twisted_rightwards_arrows'),
	remove: get('x'),
};
