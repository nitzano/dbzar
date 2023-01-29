import {type FakeOptions} from '../anonymizers/fake/fake-options';
import {type MaskOptions} from '../anonymizers/mask/mask-options';

export const providers: string[] = ['mask', 'scramble'];

export type ProviderType = 'mask' | 'fake' | 'const' | 'scramble' | 'remove';

export type BaseProvider = {
	type: ProviderType;
};

export type FakeProvider = {
	type: 'fake';
	options?: FakeOptions;
} & BaseProvider;

export type MaskProvider = {
	type: 'mask';
	options?: MaskOptions;
} & BaseProvider;

export type ScrambleProvider = {
	type: 'scramble';
	options: undefined;
} & BaseProvider;

export type Provider = FakeProvider | MaskProvider | ScrambleProvider;
