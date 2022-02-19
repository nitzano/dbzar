import {FakeOptions} from '../anonymizers/fake/fake-options';
import {MaskOptions} from '../anonymizers/mask/mask-options';

export const providers: string[] = ['mask', 'scramble'];

export type ProviderType = 'mask' | 'fake' | 'const' | 'scramble' | 'remove';

export interface BaseProvider {
	type: ProviderType;
}

export interface FakeProvider extends BaseProvider {
	type: 'fake';
	options?: FakeOptions;
}

export interface MaskProvider extends BaseProvider {
	type: 'mask';
	options?: MaskOptions;
}

export interface ScrambleProvider extends BaseProvider {
	type: 'scramble';
}

export type Provider = FakeProvider | MaskProvider | ScrambleProvider;
