import {ScrambleAnonymizer} from '../scramble-anonymizer';

describe('ScrambleAnonymizer', () => {
	let anonymizer: ScrambleAnonymizer;

	beforeEach(() => {
		anonymizer = new ScrambleAnonymizer();
	});

	it('should scramble a string', () => {
		const word = 'helverasrweq2Fax49';
		const result: string = anonymizer.anonymize(word) as string;
		expect(result).not.toBe(word);
	});
});
