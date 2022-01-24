
export interface Anonymizer {
	anonymizeString?: (value: string) => string;
	anonymizeNumber?(value: number): number;
	anonymizeBoolean?(value: boolean): boolean;
}

export abstract class BaseAnonymizer {
	anonymizeString?(value: string): string;
	anonymizeNumber?(value: number): number;
	anonymizeBoolean?(value: boolean): boolean;

	protected anonymize(value: any): any {
		switch (typeof (value)) {
			case 'string':
				if (this.anonymizeString) {
					return this.anonymizeString(value);
				}

				break;

			case 'number':
				if (this.anonymizeNumber) {
					return this.anonymizeNumber(value);
				}

				break;

			case 'boolean':
				if (this.anonymizeBoolean) {
					return this.anonymizeBoolean(value);
				}

				break;

			default:
				return value;
		}

		return value;
	}
}
