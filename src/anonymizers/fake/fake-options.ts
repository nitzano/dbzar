import {type FakeType} from './types';

export type FakeOptions = {
	fakeValue: FakeType;
};

export const defaultFakeOptions: FakeOptions = {
	fakeValue: 'word',
};
