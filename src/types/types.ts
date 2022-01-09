export type ProviderType = 'mask' | 'fake' | 'const';

export interface BaseProvider {
	type: ProviderType;
}

export type FakeType = 'firstName' | 'lastName' | 'age';

export interface FakeProvider extends BaseProvider {
	type: 'fake';
	fakeType: FakeType;
}

export interface MaskProvider extends BaseProvider {
	type: 'mask';
}

export type Provider = FakeProvider | MaskProvider;
