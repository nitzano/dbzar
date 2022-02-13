import Ajv, {ValidateFunction} from 'ajv';
import configSchema from '../assets/config.schema.json';
import {Config} from '../types';

let ajv: Ajv;
let validate: ValidateFunction;

export function validateConfig(data: any): void | never {
	if (!ajv) {
		ajv = new Ajv({allErrors: true});
		validate = ajv.compile<Config>(configSchema);
	}

	const valid = validate(data);

	if (!valid) {
		throw new Error(ajv.errorsText(validate.errors, {separator: '\n'}));
	}
}
