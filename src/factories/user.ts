import {Chance} from 'chance';
import {Factory} from 'rosie';

const chance = Chance(); // eslint-disable-line new-cap

export const userFactory = Factory.define('user').sequence('id').attr('firstName', () => chance.first()).attr('lastName', () => chance.last()).attr('age', () => chance.age());
export interface User {
	id: number;
	firstName: string;
	lastName: string;
	age: number;
}
