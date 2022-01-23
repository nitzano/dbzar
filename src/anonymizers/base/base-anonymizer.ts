
interface Anonymizer {
	anonymizeString(value: string): string;
	anonymizeNumber(value: number): number;
	anonymizeBoolean(value: boolean): boolean;
}

export class BaseAnonymizer implements Anonymizer {
	anonymize(value: any): any {
		switch (typeof (value)) {
			case 'string':
				return this.anonymizeString(value);
			case 'number':
				return this.anonymizeNumber(value);
			case 'boolean':
				return this.anonymizeBoolean(value);
			default:
				return value;
		}
	}

	anonymizeString(value: string): string {
		return value;
	}

	anonymizeNumber(value: number): number {
		return value;
	}

	anonymizeBoolean(value: boolean): boolean {
		return value;
	}
}
