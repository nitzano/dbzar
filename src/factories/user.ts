import {Chance as chance} from 'chance';
import {Factory} from 'rosie';

export const userFactory = Factory.define('user').sequence('id').attr('name', () => chance().name());

console.log(userFactory.buildList(5));
