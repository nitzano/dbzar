export type PolicyType = 'mask' | 'fake' | 'const';

export interface Policy {
	provider: PolicyType;
}

export type FakeType = 'firstName' | 'lastName';

export interface FakePolicy extends Policy {
	value: FakeType;
}
