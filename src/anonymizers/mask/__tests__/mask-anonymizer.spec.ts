import {MaskAnonymizer} from '../mask-anonymizer';

describe('MaskAnonymizer', () => {
	let maskAnonymizer: MaskAnonymizer;

	beforeEach(() => {
		maskAnonymizer = new MaskAnonymizer();
	});

	it('should anonymize a string', () => {
		const result: string = maskAnonymizer.anonymize('test') as string;
		expect(result).toBe('****');
	});
});
