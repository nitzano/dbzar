export type Provider = 'mask' | 'fake' | 'const';

export interface Policy {
	provider: Provider;
}

export type FakeType = 'firstName' | 'lastName';

export interface FakePolicy extends Policy {
	value: FakeType;
}
