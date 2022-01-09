import {Chance} from 'chance';
import {FakeType} from '../../types/types';

const chance = new Chance();

const fakeMapper: Record<FakeType, () => any > = {
	firstName: () => chance.first,
	lastName: () => chance.last,
	age: () => chance.age,
	first: () => chance.first,
	last: () => chance.last,
};

export const fakeAnonymizer = {
	fakeData(fakeType: FakeType): any {
		return fakeMapper[fakeType]();
	},
};
