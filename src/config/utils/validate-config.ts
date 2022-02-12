import Ajv, {ValidateFunction} from 'ajv';
import {createLogger} from '../../services/loggers/debug-logger';
import configSchema from '../assets/config.schema.json';
import {Config} from '../types';

let ajv: Ajv;
let validate: ValidateFunction;

const logger = createLogger(__filename);

export function validateConfig(data: any): void | never {
	if (!ajv) {
		ajv = new Ajv({allErrors: true});
		validate = ajv.compile<Config>(configSchema);
	}

	logger(`validate: ${JSON.stringify(data, null, 2)}`);
	const valid = validate(data);
	logger(`is valid: ${JSON.stringify(valid)}`);

	if (!valid) {
		throw new Error(ajv.errorsText(validate.errors, {separator: '\n'}));
	}
}
