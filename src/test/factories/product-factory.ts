import {Chance} from 'chance';
import {Factory} from 'rosie';

const chance = Chance(); // eslint-disable-line new-cap

export interface Product {
	name: string;
}

export const productFactory = Factory.define<Product>('product').attr(
	'name',
	() => chance.word(),
);
