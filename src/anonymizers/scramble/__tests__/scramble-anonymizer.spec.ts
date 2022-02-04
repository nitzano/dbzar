import {ScrambleAnonymizer} from '../scramble-anonymizer';

describe('ScrambleAnonymizer', () => {
	let anonymizer: ScrambleAnonymizer;

	beforeEach(() => {
		anonymizer = new ScrambleAnonymizer();
	});

	it('should scramble a string', () => {
		const result: string = anonymizer.anonymize('test') as string;
		expect(result).not.toBe('test');
	});
});
