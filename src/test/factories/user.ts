import {Chance} from 'chance';
import {Factory} from 'rosie';

const chance = Chance(); // eslint-disable-line new-cap

export interface User {
	firstName: string;
	lastName: string;
	age: number;
	email: string;
}

export const userFactory = Factory.define<User>('user')
	.attr('firstName', () => chance.first())
	.attr('lastName', () => chance.last())
	.attr('age', () => chance.age())
	.attr('email', () => chance.email());
