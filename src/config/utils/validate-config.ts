import Ajv from 'ajv';
import configSchema from '../assets/config.schema.json';

const ajv = new Ajv();

export function validateConfig(data: any): boolean {
	const validate = ajv.compile(configSchema);
	return validate(data);
}
