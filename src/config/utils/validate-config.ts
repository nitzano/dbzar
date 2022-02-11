import Ajv, {ValidateFunction} from 'ajv';
import configSchema from '../assets/config.schema.json';

let ajv: Ajv;
let validate: ValidateFunction;

export function validateConfig(data: any): boolean {
	if (!ajv) {
		ajv = new Ajv();
		validate = ajv.compile(configSchema);
	}

	return validate(data);
}
