import {validateConfig} from '../validate-config';

describe('validate-config', () => {
	it('should allow to pass an valid config', () => {
		const validConfig: any = {
			dbName: 'db1',
			tables: [
				{
					name: 'table1',
					columns: [
						{
							name: 'col1',
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
			dbName: 'db1',
			tables: [
				{
					name: 'table1',
					columns: [
						{
							name: 'col1',
							provider: 'mask1',
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

	it('should mark config without tables as invalid', () => {
		expect(() => {
			validateConfig({
				test: 'hello',
			});
		}).toThrow();
	});

	it('should mark empty config as invalid', () => {
		expect(() => {
			validateConfig({});
		}).toThrow();
	});
});
