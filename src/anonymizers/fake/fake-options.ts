import {FakeType} from './types';

export interface FakeOptions {
	fakeValue: FakeType;
}

export const defaultFakeOptions: FakeOptions = {
	fakeValue: 'word',
};
