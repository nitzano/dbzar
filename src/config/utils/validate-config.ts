import Ajv, {JSONSchemaType, ValidateFunction} from 'ajv';
import configSchema from '../assets/config.schema.json';
import {Config} from '../types';

let ajv: Ajv;
let validate: ValidateFunction;

console.log(typeof configSchema);

export function validateConfig(data: any): boolean {
	if (!ajv) {
		const schema: JSONSchemaType<Config> = configSchema;
		ajv = new Ajv();
		validate = ajv.compile(schema);
	}

	return validate(data);
}
