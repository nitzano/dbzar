import {validateConfig} from '../validate-config';

describe('validate-config', () => {
	it('should allow to pass an valid config', () => {
		const validConfig: any = {
			tables: [
				{
					name: 'table1',
					columns: [
						{
							name: 'column1',
							provider: 'mask',
						},
					],
				},
			],
		};

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
	it('should allow to fix  an invalid config', () => {
		const invalidConfig: any = {
			tables: [],
		};

		const isValid: boolean = validateConfig(invalidConfig);
		expect(isValid).toBe(false);
	});
});
