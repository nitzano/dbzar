import {validateConfig} from '../validate-config';
import validConfig from './fixtures/valid-config.json';

describe('validate-config', () => {
	it('should allow to pass an valid config', () => {
		const isValid: boolean = validateConfig(validConfig);
		expect(isValid).toBe(true);
	});
	it('should allow to revoke an invalid config', () => {
		const invalidConfig: any = {
			tables: [],
		};

		const isValid: boolean = validateConfig(invalidConfig);
		expect(isValid).toBe(false);
	});
});
