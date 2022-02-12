import Ajv, {ErrorObject, ValidateFunction} from 'ajv';
import configSchema from '../assets/config.schema.json';

let ajv: Ajv;
let validate: ValidateFunction;

export function validateConfig(data: any): ErrorObject | void {
	if (!ajv) {
		ajv = new Ajv({allErrors: true});
		validate = ajv.compile(configSchema);
	}

	const valid = validate(data);

	if (!valid) {
		throw new Error(ajv.errorsText(validate.errors));
	}
}
