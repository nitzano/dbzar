import Ajv, {ValidateFunction} from 'ajv';
import configSchema from '../assets/config.schema.json';

let ajv: Ajv;
let validate: ValidateFunction;

export function validateConfig(data: any): void | never {
	if (!ajv) {
		ajv = new Ajv({allErrors: true});
		validate = ajv.compile(configSchema);
	}

	const valid = validate(data);

	if (!valid) {
		throw new Error(ajv.errorsText(validate.errors));
	}
}
