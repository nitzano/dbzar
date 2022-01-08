import {Chance} from 'chance';
import {Factory} from 'rosie';

const chance = Chance(); // eslint-disable-line new-cap

export const userFactory = Factory.define('user').sequence('id').attr('name', () => chance.name());

console.log(userFactory.buildList(5));
