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

		expect(() => {
			validateConfig(validConfig);
		}).not.toThrow();
	});

	it('should allow to revoke an invalid config', () => {
		const invalidConfig: any = {
			tables: [],
		};

		expect(() => {
			validateConfig(invalidConfig);
		}).toThrow();
	});

	it('should allow to fix  an invalid config', () => {
		const config: any = {
			tables: [
				{
					name: 'table1',
					columns: [
						{
							name: 'column1',
							provider: 'mask!', // Invalid at first
						},
					],
				},
			],
		};

		expect(() => {
			validateConfig(config);
		}).toThrow();

		// Fix it
		config.tables[0].columns[0].provider = 'mask';
		expect(() => {
			validateConfig(config);
		}).not.toThrow();
	});
});
